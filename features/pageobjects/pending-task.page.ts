import { $ } from '@wdio/globals';


class PendingTaskPage {
    
    public get textAll () {
        return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/category_text" and @text="All"]');
    }
    
    public get btnCheckTask () {
        return $('~(//android.view.View[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_check"])[1]');
    }

    public get btnCheckTaskSelected () {
        return $('~//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_text" and @selected="true"]');
    }

    async wait(milliseconds: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    public async home () {
        await expect(this.textAll).toHaveTextContaining('All');
        await this.wait(5000);

    }

    public async clickCheckTask () {
        await this.btnCheckTask.click();
    }

    public async assertionCheckTaskSelected () {
        await expect(this.btnCheckTaskSelected).toBeDisplayed(); 
    }


}

export default new PendingTaskPage();
