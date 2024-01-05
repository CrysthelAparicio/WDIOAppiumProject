import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TaskPage {
    /**
     * define selectors using getter methods
     */
    public get MessageValidationCreateTask () {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_none');
    }

    public get btnAddTask () {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/iv_task_add');
    }

    public get btnTask () {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/tasks_img');
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
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_create_input');
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
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_create_btn');
    }
    public get textAll () {
        return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/category_text" and @text="All"]');
    }
   /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async wait(milliseconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    public async home () {
         await expect(this.textAll).toHaveTextContaining('All');
         await this.wait(2000);
 
     }

    public async TabTask () {
        await this.btnTask.click();
        await this.wait(2000);

    }
    public async AssertionMessageDisplayed () {
         await expect(this.MessageValidationCreateTask).toHaveTextContaining('Click here to create your first task.');
         await this.wait(2000);
 
     }

     public async blueButtonDisplayed () {
        await expect(this.btnAddTask).toBeDisplayed();
        await this.wait(2000);

    }
    //---------------------------------------------------AC-09-----------------------------------------------------//

    public async userTapsBlueNewTask () {
        await this.btnAddTask.click();
        await this.wait(2000);

    }
    public async inputTaskNameDisplayed () {
        await expect(this.inputNewTask).toBeDisplayed();
        await expect(this.inputNewTask).toHaveTextContaining('Input new task here');
        await this.wait(2000);

    }
    public async tapsOnTaskName () {
        await this.inputNewTask.click();
        await this.wait(2000);

    }
    public async enterNewName () {
        const random = Math.floor((Math.random() * 1000));
        (await this.inputNewTask).setValue('My Task - ' + random);
        await this.wait(5000);

    }
    public async clickButtonSend () {
        await this.btnTaskCreate.click();
        await this.wait(5000);

    }
 
}

export default new TaskPage();
