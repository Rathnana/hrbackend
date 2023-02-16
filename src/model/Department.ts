import mongoose, { model, Schema } from 'mongoose';
import { departmentType } from '../type/departmentType';
import paginate from 'mongoose-paginate-v2';

const departmetntSchema = new Schema<departmentType>({
    name: String,
    description: String,
    profile_image: String,
    head: { type: Schema.Types.ObjectId, ref: 'employees' },
    created_at: { type: Date, default: Date.now }
})

departmetntSchema.plugin(paginate);

const departments = model<departmentType, mongoose.PaginateModel<departmentType>>('departments', departmetntSchema);
export default departments;