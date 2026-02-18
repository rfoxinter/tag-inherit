PluginAPI.registerHook(PluginAPI.Hooks.ACTION, async (action) => {
    if (action.action.type === '[Task] Add SubTask') {
        let tasks = await PluginAPI.getCurrentContextTasks();
        let parent = tasks.filter(x => x.id == action.action.parentId)[0];
        let parentTags = parent.tagIds.length==0?parent.subTasks[0].tagIds:parent.tagIds;
        let task = action.action.task.id;
        await PluginAPI.updateTask(task, {
            tagIds: parentTags,
        });
    }
});