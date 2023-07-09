javascript: (function() {
    const EASY_QUEST = 2,
        MEDIUM_QUEST = 3,
        HARD_QUEST = 4,
        EX_HARD_QUEST = 5,
        IMPOSSIBLE_QUEST = 6;
    const DIFFICULTY = HARD_QUEST;
    const SWITCH_ACCOUNT = false;
    const getForm = () => $('<form>').append($('<input>', {
        name: 'TypeID',
        value: `${DIFFICULTY}`
    }));
    const delay = ms => new Promise(res => setTimeout(res, ms));

    function waitExists(selector, timeoutS = 1000) {
        const promiseWithTimeout = (promise, timeOutS) => {
            let timeoutId;
            const timeoutPromise = new Promise((_, reject) => {
                timeoutId = setTimeout(() => {
                    reject(new Error('Request timed out'));
                }, timeOutS);
            });
            return Promise.race([promise, timeoutPromise]);
        };
        return promiseWithTimeout(new Promise(resolve => {
            if ($(selector).length > 0) {
                return resolve($(selector));
            }
            const observer = new MutationObserver(mutations => {
                if ($(selector).length > 0) {
                    resolve($(selector));
                    observer.disconnect();
                }
            });
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }), timeoutS);
    }
    async function switchToNextAccount() {
        ui_action_secLoad('global', 'header', 'picker');
        await waitExists('#picker a');
        var curAcocuntId = $('#acc-picker a').attr('href').match(/usr=([0-9]+)/)[1];
        var accountIds = $('#picker a').map(function() {
            return this.getAttribute('onclick').match(/(?<=Account=)([0-9]+)/)[1]
        }).toArray();
        var nxtIndex = accountIds.indexOf(curAcocuntId) + 1;
        nxtIndex = (nxtIndex >= accountIds.length) ? 0 : nxtIndex;
        ui_action_cmdExec('account_switch', `Account=${accountIds[nxtIndex]}`, self.form, function() {
            ui_action_load()
        });
    }

    function massQuest() {
        ui_action_cmdExec('pony_massquestlevel', '', null, function() {
            ui_action_secLoad('ponies', 'quests', 'quests', 'prio=1', '', null);
        })
    }
    async function questing() {
        massQuest();
        await delay(500);
        ui_action_cmdExec('quest_massinit', '', getForm()[0], null);
        await delay(500);
        massQuest();
        await delay(500);
        if (SWITCH_ACCOUNT) {
            await switchToNextAccount();
        } else {
            $('[role="dialog"] button').click();
            location.reload();
        }
    }
    questing();
})()