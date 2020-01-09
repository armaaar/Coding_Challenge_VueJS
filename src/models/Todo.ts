import { Model } from '@vuex-orm/core';
import { OrmModel, StringField, IncrementField, BooleanField } from 'vuex-orm-decorators'
 
@OrmModel('todos')
export default class Todo extends Model {

    @IncrementField()
    public id!: any;
 
    @StringField()
    public title!: string;
 
    @BooleanField(false)
    public completed!: boolean;
}

export interface TodoType {
    id: any;
    title: string;
    completed: boolean;
}
