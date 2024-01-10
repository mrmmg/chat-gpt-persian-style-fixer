chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'fixPersianDirection') {
      if (window.location.host === 'chat.openai.com') {

        const messageAuthorRoleDivs = document.querySelectorAll('div[data-message-author-role]');

        messageAuthorRoleDivs.forEach(function(div) {
            const textContent = div.textContent.trim();

            const persianRegex = /[\u0600-\u06FF]/;

            let isContainsPersian = persianRegex.test(textContent);

            if(isContainsPersian){
                div.style.direction = 'rtl';
                div.style.lineHeight = '2rem';
            }
        });
      }
    }
});  