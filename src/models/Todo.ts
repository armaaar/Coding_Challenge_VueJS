import { Model } from '@vuex-orm/core';
import { OrmModel, StringField, IncrementField, BooleanField } from 'vuex-orm-decorators'
 
/**
 * ORM Model for todos
 * @class
 */
@OrmModel('todos')
export default class Todo extends Model {

    /**
     * @member {any} id - unique id for todo item
     */
    @IncrementField()
    public id!: any;
 
    /**
     * @member {string} title - title of todo item
     */
    @StringField()
    public title!: string;
 
    /**
     * @member {boolean} completed - flag if todo item is completed or not
     * @default false
     */
    @BooleanField(false)
    public completed!: boolean;
}

/**
 * An object of a Todo item
 * @typedef {any, string, boolean} TodoType
 */
export interface TodoType {
    id: any;
    title: string;
    completed: boolean;
}
