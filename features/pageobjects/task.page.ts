import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TaskPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get MessageValidationCreateTask () {
        return $('~todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_none');
    }

    public get btnAddTask () {
        return $('~todolist.scheduleplanner.dailyplanner.todo.reminders:id/iv_task_add');
    }

    public get btnTask () {
        return $('~todolist.scheduleplanner.dailyplanner.todo.reminders:id/tasks_img');
    }

    public get btnMenu () {
        return $('~todolist.scheduleplanner.dailyplanner.todo.reminders:id/ic_menu');
    }

    public get btnCalendar () {
        return $('~todolist.scheduleplanner.dailyplanner.todo.reminders:id/calendar_img');
    }

    public get btnMine () {
        return $('~todolist.scheduleplanner.dailyplanner.todo.reminders:id/mine_img');
    }

    public get btnAll () {
        return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/category_text" and @text="All"]');
    }

    public get btnWork () {
        return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/category_text" and @text="Work"]');
    }

    public get btnPersonal () {
        return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/category_text" and @text="Personal"]');
    }

    public get btnWishlist () {
        return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/category_text" and @text="Wishlist"]');
    }

    public get inputNewTask () {
        return $('~todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_create_input');
    }

    public get btnNewCategory () {
        return $('~todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_create_category');
    }

    public get btnCreateCalendar () {
        return $('~todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_create_calendar');
    }

    public get btnCreateItems () {
        return $('~todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_create_items');
    }

    public get btnTaskCreate () {
        return $('~todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_create_btn');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async AssertionCreateTask () {
    
        await this.btnAddTask.click();
        await this.wait(2000);

    }
   
    async wait(milliseconds: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new TaskPage();
