import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import addMaterial from "../../api/requestsForm/addMaterial";
import addLearningMaterialToCurriculum from "../../api/requestsForm/addLearningMaterialToCurriculum";
import { getProgramsContent } from "../../api/requests/getProgramsContent";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useParams } from "react-router-dom";

type Props = {
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormValues = {
    name: string;
    description: string;
    url: string | null;
    timer: string | null;
    file: any | null;
    article: string | null;
    banner: string | null;
    date: string | null;
    time: string | null;
};

const MEETING_DEFAULT = {
    // name: file.name,
    max_participants: 10,
    welcome: "Welcome",
    logout_url: "http://example.com",
    record: false,
    duration: null,
    moderator_only_message: false,
    auto_start_recording: false,
    allow_start_stop_recording: false,
    webcams_only_for_moderators: false,
    // banner_text: file.banner_text,
    banner_color: null,
    mute_on_start: false,
    allow_mods_to_unmute_users: false,
    lock_settings_disable_cam: false,
    lock_settings_disable_mic: false,
    lock_settings_disable_private_chat: false,
    lock_settings_disable_public_chat: false,
    lock_settings_disable_notes: false,
    lock_settings_locked_layout: false,
    lock_settings_lock_on_join: false,
    lock_settings_lock_on_join_configurable: false,
    lock_settings_hide_viewer_cursor: false,
    guest_policy: "ALWAYS_ACCEPT",
    meeting_keep_events: false,
    end_when_no_moderator: false,
    end_when_no_moderator_delay_in_minutes: 20,
    meeting_layout: "CUSTOM_LAYOUT",
    learning_dashboard_cleanup_delay_in_minutes: 2,
    allow_mods_to_eject_cameras: false,
    allow_request_without_session: false,
    user_camera_cap: 3,
    meeting_camera_cap: 0,
    meeting_expire_if_no_user_joined_in_minute: 5,
    meeting_expire_when_last_user_left_in_minutes: 1,
    logo: null,
    notify_recording_is_on: false,
    // start_datetime: `${file.date}T${file.time}`,
};

const AddFileEdProgramForm: React.FC<Props> = ({ setShowPopup }) => {
    const { curriculumId } = useParams() as { curriculumId: string };

    const [fileTypeValue, setFileTypeValue] = useState("add_web_resource");
    const [fileForForm, setFileForForm] = useState<File | null | undefined>(
        null
    );
    const [article, setArticle] = useState("<p>...</p>");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        let material: any = {
            name: data.name,
            description: data.description,
        };

        switch (fileTypeValue) {
            case "add_article":
                material["content"] = article;
                break;
            case "add_web_resource":
                material["url"] = data.url;
                break;
            case "add_pdf_resource":
                material["timer"] = data.timer;
                material["file"] = fileForForm;
                break;
            case "add_video":
                // ???????? ???????? web ???????????? ???? ?????? ???????????? ?????????????????? ???????????? ?????????? ??????????
                material["file"] = fileForForm;
                // ???????????????? ???????? ?????? ????????????
                material["complete_threshold"] = 55;
                break;
            case "add_meeting":
                material = {
                    ...material,
                    ...MEETING_DEFAULT,
                    attachments: fileForForm,
                    // timer: ...
                    start_datetime: `${data.date}T${data.time}`,
                };
                break;
            case "add_scorm_course":
                material["file"] = fileForForm;
                break;
            default:
                throw new Error("?????????????????????? ?????? ??????????????????");
        }

        toast.promise(
            addMaterial(material, fileTypeValue)
                .then((res) =>
                    addLearningMaterialToCurriculum(res.data.id, curriculumId)
                )
                .then(() => getProgramsContent(curriculumId)),
            {
                loading: "???????????????? ???????????? ???? ????????????",
                error: "?????????????????? ???????????? ?????? ???????????????? ????????????",
                success: "??????????????",
            }
        );

        setShowPopup(false);
        reset();
    };

    return (
        <div className="max-w-[500px]">
            <select
                className="mx-auto mb-6 block cursor-pointer rounded bg-blue p-2 text-center text-white focus:outline-none"
                onChange={(e) => {
                    setFileTypeValue(e.target.value);
                    reset();
                }}
            >
                <option value="add_web_resource">??????-????????????</option>
                <option value="add_pdf_resource">PDF-????????</option>
                <option value="add_scorm_course">SCORM</option>
                <option value="add_article">????????????</option>
                <option value="add_video">??????????</option>
                <option value="add_meeting">??????????????????????</option>
            </select>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <label>
                    ???????????????? ???????????????? ??????????????????:
                    <input
                        className="my-1 w-full rounded bg-[#F7FCFF] p-2 focus:outline-none"
                        {...register("name", {
                            required: "?????????????????????? ?????? ????????????????????",
                        })}
                        type="text"
                    />
                    {errors.name && (
                        <span role="alert" className="text-sm text-gray-500">
                            {errors.name.message}
                        </span>
                    )}
                </label>

                <label>
                    ???????????????? ???????????????? ??????????????????:
                    <textarea
                        className="my-1 w-full rounded bg-[#F7FCFF] p-2 focus:outline-none"
                        rows={4}
                        {...register("description")}
                    />
                    {errors.description && (
                        <span role="alert" className="text-sm text-gray-500">
                            {errors.description.message}
                        </span>
                    )}
                </label>

                {fileTypeValue === "add_article" && (
                    <>
                        <p>???????????????????? ????????????:</p>
                        <CKEditor
                            editor={ClassicEditor}
                            data={"article"}
                            onChange={(
                                event: any,
                                editor: { getData: () => string }
                            ) => {
                                console.log(editor);
                                setArticle(editor.getData());
                            }}
                        />
                    </>
                )}

                {fileTypeValue === "add_web_resource" && (
                    <label>
                        ???????????? ???? WEB-????????????:
                        <input
                            className="my-1 w-full rounded bg-[#F7FCFF] p-2 focus:outline-none"
                            {...register("url", {
                                required: "?????????????????????? ?????? ????????????????????",
                            })}
                            type="url"
                        />
                        {errors.url && (
                            <span
                                role="alert"
                                className="text-sm text-gray-500"
                            >
                                {errors.url.message}
                            </span>
                        )}
                    </label>
                )}

                {fileTypeValue === "add_pdf_resource" && (
                    <>
                        <label>
                            PDF-????????:
                            <input
                                className="mt-2 block w-full text-sm text-slate-500 file:mr-4 file:rounded file:border-0 file:bg-[#F7FCFF] file:py-2 file:px-4 file:text-sm file:font-semibold file:text-blue hover:file:bg-[#e9f7ff]"
                                {...register("file")}
                                type="file"
                                required
                                onChange={(e) =>
                                    setFileForForm(e.target.files?.item(0))
                                }
                            />
                        </label>

                        <label>
                            ???????????????????? ????????????:
                            <input
                                className="my-1 w-full rounded bg-[#F7FCFF] p-2 focus:outline-none"
                                {...register("timer")}
                                type="time"
                                step="1"
                            />
                            {errors.timer && (
                                <span
                                    role="alert"
                                    className="text-sm text-gray-500"
                                >
                                    {errors.timer.message}
                                </span>
                            )}
                        </label>
                    </>
                )}

                {fileTypeValue === "add_scorm_course" && (
                    <label>
                        SCORM ????????:
                        <input
                            className="mt-2 block w-full text-sm text-slate-500 file:mr-4 file:rounded file:border-0 file:bg-[#F7FCFF] file:py-2 file:px-4 file:text-sm file:font-semibold file:text-blue hover:file:bg-[#e9f7ff]"
                            {...register("file")}
                            type="file"
                            required
                            onChange={(e) =>
                                setFileForForm(e.target.files?.item(0))
                            }
                        />
                    </label>
                )}

                {fileTypeValue === "add_video" && (
                    <label>
                        ???????? ??????????:
                        <input
                            className="mt-2 block w-full text-sm text-slate-500 file:mr-4 file:rounded file:border-0 file:bg-[#F7FCFF] file:py-2 file:px-4 file:text-sm file:font-semibold file:text-blue hover:file:bg-[#e9f7ff]"
                            {...register("file", {
                                required: "?????????????????????? ?????? ????????????????????",
                            })}
                            type="file"
                            required
                            onChange={(e) =>
                                setFileForForm(e.target.files?.item(0))
                            }
                        />
                    </label>
                )}

                {fileTypeValue === "add_meeting" && (
                    <>
                        <label>
                            ???????? ????????????:
                            <input
                                className="my-1 w-full rounded bg-[#F7FCFF] p-2 focus:outline-none"
                                {...register("date", {
                                    required: "?????????????????????? ?????? ????????????????????",
                                })}
                                type="date"
                                step="1"
                            />
                            {errors.date && (
                                <span
                                    role="alert"
                                    className="text-sm text-gray-500"
                                >
                                    {errors.date.message}
                                </span>
                            )}
                        </label>

                        <label>
                            ?????????? ????????????:
                            <input
                                className="my-1 w-full rounded bg-[#F7FCFF] p-2 focus:outline-none"
                                {...register("time", {
                                    required: "?????????????????????? ?????? ????????????????????",
                                })}
                                type="time"
                                step="1"
                            />
                            {errors.time && (
                                <span
                                    role="alert"
                                    className="text-sm text-gray-500"
                                >
                                    {errors.time.message}
                                </span>
                            )}
                        </label>

                        <label>
                            ???????? ??????.????????????????????:
                            <input
                                className="mt-2 block w-full text-sm text-slate-500 file:mr-4 file:rounded file:border-0 file:bg-[#F7FCFF] file:py-2 file:px-4 file:text-sm file:font-semibold file:text-blue hover:file:bg-[#e9f7ff]"
                                {...register("file")}
                                type="file"
                                multiple
                                onChange={(e) =>
                                    setFileForForm(e.target.files?.item(0))
                                }
                            />
                        </label>
                    </>
                )}

                <button
                    type="submit"
                    className="mt-6 rounded bg-blue py-2 text-center text-white hover:bg-[#F7FCFF] hover:text-textblack hover:shadow-[10px_10px_25px_0_rgba(114,188,232,0.2)]"
                >
                    ?????????????? ????????????????
                </button>
            </form>
        </div>
    );
};

export default AddFileEdProgramForm;
