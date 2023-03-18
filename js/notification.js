const notifications = document.querySelector(".notifications"),
buttons = document.querySelector(".success-container");

  
const notifactionDetails = {
    timer: 5000,
    success:{
        text: '',
        svg: '<img src="https://i.gifer.com/7efs.gif" width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="#0abf30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>'
    },
    cancel:'<svg onclick=deleteNotification(this.parentElement) class="cancel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"> <line x1="18" y1="6" x2="6" y2="18"></line> <line x1="6" y1="6" x2="18" y2="18"></line> </svg>'
    
}

const deleteNotification = (toast) =>{

    toast.classList.add('hide')
    setInterval(() => {
        toast.remove()
    }, 100);

}


const createNotification = (id) => {
  const notification = document.createElement("li");
  notification.id = id;
  const {text, svg} = notifactionDetails[id]
  const cancelBtn = notifactionDetails.cancel
  notification.classList = "notification";
  notification.innerHTML = `
        <div class="content">
            <div>
                ${svg}
            </div>
            <p>${text}</p>
        </div>
        ${cancelBtn}
    `;
  notifications.appendChild(notification);
  setTimeout(() => {
    deleteNotification(notification)
  }, 5000);
};

buttons.childNodes.forEach((button) => {
  button.addEventListener("click", () => {
    createNotification(button.getAttribute('id'));
  });
});
