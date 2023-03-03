export interface IUser {
    id: number;
    is_active: boolean;
    is_staff: boolean;
    is_superuser: boolean;
    first_name: string;
    surname: string;
    last_name: string;
    position: string;
    date_joined: string;
    image: string;
    email: string;
    channels: any[];
    trajectories: ITrajectory[];
}

export interface ITrajectory {
    id: number;
    image: string;
    online: number;
    name: string;
    description: string;
    organization: number;
    is_deleted: boolean;
    time_create: string;
    time_update: string;
}

export interface IEmployee {
    id: number;
    image: string;
    first_name: string;
    surname: string;
    last_name: string;
    email: string;
    date_joined: string;
    position: string;
    is_active: boolean;
    is_staff: boolean;
    is_superuser: boolean;
    achievements: any[];
    channels: any[];
    trajectories: any[];
}

export interface IActive {
    id: number;
    name: string;
    description: string;
    image: string;
    priority: number;
    threats: IThreat[];
    time_create: string;
    time_update: string;
    trajectory: number;
}

export interface IMaterial {
    id: number;
    name: string;
    description: string;
    content_type: string;
    tags: ITag[];
    time_create: string;
    time_update: string;
}

export interface IEdProgram {
    id: number;
    name: string;
    description: string;
    is_available: boolean;
    active: number;
    meetings: any[];
    time_create: string;
    time_update: string;
}

export interface IThreat {
    active: number;
    description: string;
    id: number;
    name: string;
    priority: number;
    time_create: string;
    time_update: string;
}

export interface IEvent {
    id: number;
    content: string;
    time_create: string;
}

export interface IEvents {
    count: number;
    next: string;
    previous: string;
    results: Event[];
}

export interface ICurriculum {
    content: {
        id: number | string;
        name: string;
        description: string;
        content_type: string;
        time_create: string;
        time_update: string;
        tags: ITag[];
    };
    deadline: string;
    id: number | string;
    open_time: string;
    required_for_completion: boolean;
    time_create: string;
}

export interface ITag {
    id: number | string;
    name: string;
    description: string;
}
