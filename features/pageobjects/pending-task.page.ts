import { $ } from '@wdio/globals'
import Page from './page.js';


class PendingTaskPage extends Page {
    
    public get btnCheckTask () {
        return $('~(//android.view.View[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_check"])[1]');
    }

    public get btnCheckTaskSelected () {
        return $('~//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_text" and @selected="true"]');
    }

    async wait(milliseconds: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    public open () {
        return super.open('login');
    }

    public async clickCheckTask () {
        await this.btnCheckTask.click();
    }

    public async assertionCheckTaskSelected () {
        await expect(this.btnCheckTaskSelected).toBeDisplayed(); 
    }


}

export default new PendingTaskPage();
