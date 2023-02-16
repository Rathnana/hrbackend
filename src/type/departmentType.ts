import { Types } from 'mongoose';

export interface departmentType {
    _id: Types.ObjectId;
    name: string;
    description: string;
    profile_image: string;
    head: Types.ObjectId;
    created_at: Date;
}
export interface officeType {
    _id: Types.ObjectId;
    name: string;
    department: Types.ObjectId;
    description: string;
    profile_image: string;
    head: Types.ObjectId;
    created_at: Date;
}
export interface sectionType {
    _id: Types.ObjectId;
    name: string;
    office: Types.ObjectId;
    description: string;
    profile_image: string;
    created_at: Date;
}
export interface jobeTitleType {
    _id: Types.ObjectId;
    name: string;
    description: string;
    created_at: Date;
}
