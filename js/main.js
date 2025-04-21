const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
    });
})
const slugPage = window.location.pathname;
const navItem = document.querySelector(`.nav-item a[href="${slugPage}"]`);
if(navItem){
    navItem.classList.add('active');
};
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function selectOption(value, selectedValueId, dropdownId) {
    const selectedValue = document.getElementById(selectedValueId);
    const dropdown = document.getElementById(dropdownId);
    selectedValue.classList.add('active')
    selectedValue.textContent = value;
    dropdown.style.display = "none";
}

document.addEventListener("click", (event) => {
    const customSelectRole = document.getElementById("customSelectRole");
    const customSelectStatus = document.getElementById("customSelectStatus");
    const dropdownRole = document.getElementById("dropdownRole");
    const dropdownStatus = document.getElementById("dropdownStatus");

    if (!customSelectRole.contains(event.target)) {
        dropdownRole.style.display = "none";
    }
    if (!customSelectStatus.contains(event.target)) {
        dropdownStatus.style.display = "none";
    }
});
const users = [
    {
        id:1,
        name: "John Tan",
        email: "johntan@gmail.com",
        contact: "9090 1010",
        role: "Admin",
        lastLogin: "05/12/2024 10:00 AM",
        enabled: true
    },
    {
        id:2,
        name: "Lily Loh",
        email: "lilylily@yahoo.com",
        contact: "8765 1065",
        role: "Viewer",
        lastLogin: "05/12/2024 10:00 AM",
        enabled: true
    },
    {
        id:3,
        name: "Cheryl Ng",
        email: "cherylngng@gmail.com",
        contact: "9763 1234",
        role: "Viewer",
        lastLogin: "05/12/2024 10:00 AM",
        enabled: false
    }
];
const campaigns = [
    {
        id:1,
        ranking:1,
        status:"Active",
        campaign:"Campaign 1",
        campaignPeriod:"01/01/2023 - 31/12/2023",
        market:"Singapore",
        lastModified:"01/01/2023 10:00 AM",
        lastModifiedBy:"John Tan",

    },
    {
        id:2,
        ranking:1,
        status:"Active",
        campaign:"Campaign 1",
        campaignPeriod:"01/01/2023 - 31/12/2023",
        market:"Singapore",
        lastModified:"01/01/2023 10:00 AM",
        lastModifiedBy:"John Tan",

    },
    {
        id:3,
        ranking:1,
        status:"Active",
        campaign:"Campaign 1",
        campaignPeriod:"01/01/2023 - 31/12/2023",
        market:"Singapore",
        lastModified:"01/01/2023 10:00 AM",
        lastModifiedBy:"John Tan",

    },
]
function createTable(data) {
    const tableBody = document.querySelector(".user-table tbody");
    if(!tableBody){
        return
    }
    tableBody.innerHTML = ""; 

    data.forEach(user => {
        const row = document.createElement("tr");
        const checkboxCell = document.createElement("td");
        checkboxCell.classList.add("checkbox-column");
        checkboxCell.innerHTML = `<input type="checkbox">`;
        row.appendChild(checkboxCell);
        const nameCell = document.createElement("td");
        nameCell.textContent = user.name;
        row.appendChild(nameCell);
        const emailCell = document.createElement("td");
        emailCell.textContent = user.email;
        row.appendChild(emailCell);
        const contactCell = document.createElement("td");
        contactCell.textContent = user.contact;
        row.appendChild(contactCell);
        const roleCell = document.createElement("td");
        roleCell.textContent = user.role;
        row.appendChild(roleCell);
        const lastLoginCell = document.createElement("td");
        lastLoginCell.innerHTML = user.lastLogin.replace(" ", "<br>");
        row.appendChild(lastLoginCell);
        const toggleCell = document.createElement("td");
        toggleCell.innerHTML = `
            <label class="toggle">
                <input type="checkbox" ${user.enabled ? "checked" : ""}>
                <span class="slider"></span>
            </label>
        `;
        row.appendChild(toggleCell);
        const actionsCell = document.createElement("td");
        actionsCell.classList.add("actions-column");
        actionsCell.innerHTML = `
            <button onClick="edit('${user.id}')" class="action-btn edit">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2.7 14.4025H6.516C6.63445 14.4032 6.75186 14.3805 6.86152 14.3357C6.97117 14.2909 7.0709 14.2249 7.155 14.1415L13.383 7.90453L15.939 5.40253C16.0234 5.31887 16.0903 5.21933 16.136 5.10965C16.1817 4.99998 16.2052 4.88234 16.2052 4.76353C16.2052 4.64472 16.1817 4.52709 16.136 4.41741C16.0903 4.30774 16.0234 4.2082 15.939 4.12453L12.123 0.263533C12.0393 0.179177 11.9398 0.112222 11.8301 0.0665307C11.7204 0.0208389 11.6028 -0.00268555 11.484 -0.00268555C11.3652 -0.00268555 11.2476 0.0208389 11.1379 0.0665307C11.0282 0.112222 10.9287 0.179177 10.845 0.263533L8.307 2.81053L2.061 9.04753C1.97759 9.13163 1.91159 9.23136 1.86681 9.34102C1.82202 9.45067 1.79932 9.56809 1.8 9.68653V13.5025C1.8 13.7412 1.89482 13.9701 2.0636 14.1389C2.23239 14.3077 2.46131 14.4025 2.7 14.4025ZM11.484 2.17153L14.031 4.71853L12.753 5.99653L10.206 3.44953L11.484 2.17153ZM3.6 10.0555L8.937 4.71853L11.484 7.26553L6.147 12.6025H3.6V10.0555ZM17.1 16.2025H0.9C0.661305 16.2025 0.432387 16.2974 0.263604 16.4661C0.0948211 16.6349 0 16.8638 0 17.1025C0 17.3412 0.0948211 17.5701 0.263604 17.7389C0.432387 17.9077 0.661305 18.0025 0.9 18.0025H17.1C17.3387 18.0025 17.5676 17.9077 17.7364 17.7389C17.9052 17.5701 18 17.3412 18 17.1025C18 16.8638 17.9052 16.6349 17.7364 16.4661C17.5676 16.2974 17.3387 16.2025 17.1 16.2025Z" fill="#44424B"/>
                </svg>
            </button>
          <button class="action-btn delete" onClick="confirmDelete(${user.id}, '${user.name}', '${user.email}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3.36214 18C2.78786 18 2.298 17.8204 1.89257 17.4613C1.488 17.1021 1.28571 16.6672 1.28571 16.1566V2.02029H0V0.878884H5.14286V0H12.8571V0.878884H18V2.02029H16.7143V16.1566C16.7143 16.6817 16.5163 17.12 16.1203 17.4715C15.7234 17.8238 15.2293 18 14.6379 18H3.36214ZM15.4286 2.02029H2.57143V16.1566C2.57143 16.3613 2.64557 16.5295 2.79386 16.6611C2.94214 16.7928 3.13157 16.8586 3.36214 16.8586H14.6379C14.835 16.8586 15.0163 16.7855 15.1817 16.6394C15.3463 16.4926 15.4286 16.3316 15.4286 16.1566V2.02029ZM6.18171 14.5758H7.46743V4.30311H6.18171V14.5758ZM10.5326 14.5758H11.8183V4.30311H10.5326V14.5758Z" fill="#44424B"/>
            </svg>
        </button>
        `;
        row.appendChild(actionsCell);
        tableBody.appendChild(row);
    });
}
function createTableCam(data) {
    const tableBody = document.querySelector(".campaign-table tbody");
    if(!tableBody){
        return
    }
    tableBody.innerHTML = ""; 

    data.forEach(cam => {
        const row = document.createElement("tr");
        const checkboxCell = document.createElement("td");
        checkboxCell.classList.add("checkbox-column");
        checkboxCell.innerHTML = `<input type="checkbox">`;
        row.appendChild(checkboxCell);
        const nameCell = document.createElement("td");
        nameCell.textContent = cam.campaign;
        row.appendChild(nameCell);
        const ranking = document.createElement("td");
        ranking.textContent = cam.ranking;
        row.appendChild(ranking);
        const status = document.createElement("td");
        status.textContent = cam.status;
        row.appendChild(status);
        const camPeriod = document.createElement("td");
        camPeriod.textContent = cam.campaignPeriod;
        row.appendChild(camPeriod);
        const market = document.createElement("td");
        market.textContent = cam.market;
        row.appendChild(market);
        const lastModified = document.createElement("td");
        lastModified.textContent = cam.lastModified;
        row.appendChild(lastModified);
        const lastModifiedBy = document.createElement("td");
        lastModifiedBy.textContent = cam.lastModifiedBy;
        row.appendChild(lastModifiedBy);
    
        const actionsCell = document.createElement("td");
        actionsCell.classList.add("actions-column");
        actionsCell.innerHTML = `
            <button onClick="edit('${cam.id}')" class="action-btn edit">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2.7 14.4025H6.516C6.63445 14.4032 6.75186 14.3805 6.86152 14.3357C6.97117 14.2909 7.0709 14.2249 7.155 14.1415L13.383 7.90453L15.939 5.40253C16.0234 5.31887 16.0903 5.21933 16.136 5.10965C16.1817 4.99998 16.2052 4.88234 16.2052 4.76353C16.2052 4.64472 16.1817 4.52709 16.136 4.41741C16.0903 4.30774 16.0234 4.2082 15.939 4.12453L12.123 0.263533C12.0393 0.179177 11.9398 0.112222 11.8301 0.0665307C11.7204 0.0208389 11.6028 -0.00268555 11.484 -0.00268555C11.3652 -0.00268555 11.2476 0.0208389 11.1379 0.0665307C11.0282 0.112222 10.9287 0.179177 10.845 0.263533L8.307 2.81053L2.061 9.04753C1.97759 9.13163 1.91159 9.23136 1.86681 9.34102C1.82202 9.45067 1.79932 9.56809 1.8 9.68653V13.5025C1.8 13.7412 1.89482 13.9701 2.0636 14.1389C2.23239 14.3077 2.46131 14.4025 2.7 14.4025ZM11.484 2.17153L14.031 4.71853L12.753 5.99653L10.206 3.44953L11.484 2.17153ZM3.6 10.0555L8.937 4.71853L11.484 7.26553L6.147 12.6025H3.6V10.0555ZM17.1 16.2025H0.9C0.661305 16.2025 0.432387 16.2974 0.263604 16.4661C0.0948211 16.6349 0 16.8638 0 17.1025C0 17.3412 0.0948211 17.5701 0.263604 17.7389C0.432387 17.9077 0.661305 18.0025 0.9 18.0025H17.1C17.3387 18.0025 17.5676 17.9077 17.7364 17.7389C17.9052 17.5701 18 17.3412 18 17.1025C18 16.8638 17.9052 16.6349 17.7364 16.4661C17.5676 16.2974 17.3387 16.2025 17.1 16.2025Z" fill="#44424B"/>
                </svg>
            </button>
            <button onClick="edit('${cam.id}')" class="action-btn edit">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2.7 14.4025H6.516C6.63445 14.4032 6.75186 14.3805 6.86152 14.3357C6.97117 14.2909 7.0709 14.2249 7.155 14.1415L13.383 7.90453L15.939 5.40253C16.0234 5.31887 16.0903 5.21933 16.136 5.10965C16.1817 4.99998 16.2052 4.88234 16.2052 4.76353C16.2052 4.64472 16.1817 4.52709 16.136 4.41741C16.0903 4.30774 16.0234 4.2082 15.939 4.12453L12.123 0.263533C12.0393 0.179177 11.9398 0.112222 11.8301 0.0665307C11.7204 0.0208389 11.6028 -0.00268555 11.484 -0.00268555C11.3652 -0.00268555 11.2476 0.0208389 11.1379 0.0665307C11.0282 0.112222 10.9287 0.179177 10.845 0.263533L8.307 2.81053L2.061 9.04753C1.97759 9.13163 1.91159 9.23136 1.86681 9.34102C1.82202 9.45067 1.79932 9.56809 1.8 9.68653V13.5025C1.8 13.7412 1.89482 13.9701 2.0636 14.1389C2.23239 14.3077 2.46131 14.4025 2.7 14.4025ZM11.484 2.17153L14.031 4.71853L12.753 5.99653L10.206 3.44953L11.484 2.17153ZM3.6 10.0555L8.937 4.71853L11.484 7.26553L6.147 12.6025H3.6V10.0555ZM17.1 16.2025H0.9C0.661305 16.2025 0.432387 16.2974 0.263604 16.4661C0.0948211 16.6349 0 16.8638 0 17.1025C0 17.3412 0.0948211 17.5701 0.263604 17.7389C0.432387 17.9077 0.661305 18.0025 0.9 18.0025H17.1C17.3387 18.0025 17.5676 17.9077 17.7364 17.7389C17.9052 17.5701 18 17.3412 18 17.1025C18 16.8638 17.9052 16.6349 17.7364 16.4661C17.5676 16.2974 17.3387 16.2025 17.1 16.2025Z" fill="#44424B"/>
                </svg>
            </button>
          <button class="action-btn delete" onClick="confirmDelete(${cam.id}, '${cam.name}', '${cam.ranking}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3.36214 18C2.78786 18 2.298 17.8204 1.89257 17.4613C1.488 17.1021 1.28571 16.6672 1.28571 16.1566V2.02029H0V0.878884H5.14286V0H12.8571V0.878884H18V2.02029H16.7143V16.1566C16.7143 16.6817 16.5163 17.12 16.1203 17.4715C15.7234 17.8238 15.2293 18 14.6379 18H3.36214ZM15.4286 2.02029H2.57143V16.1566C2.57143 16.3613 2.64557 16.5295 2.79386 16.6611C2.94214 16.7928 3.13157 16.8586 3.36214 16.8586H14.6379C14.835 16.8586 15.0163 16.7855 15.1817 16.6394C15.3463 16.4926 15.4286 16.3316 15.4286 16.1566V2.02029ZM6.18171 14.5758H7.46743V4.30311H6.18171V14.5758ZM10.5326 14.5758H11.8183V4.30311H10.5326V14.5758Z" fill="#44424B"/>
            </svg>
        </button>
        `;
        row.appendChild(actionsCell);
        tableBody.appendChild(row);
    });
}
document.addEventListener("DOMContentLoaded", () => {
    createTable(users);
    createTableCam(campaigns);            
});
function confirmDelete(userId, userName, userEmail) {
    const modal = document.querySelector(".model-confirm");
    const userInfo = document.getElementById("user-info");
    userInfo.textContent = `User: ${userName} (${userEmail})`;
    modal.style.display = "flex";

    const confirmButton = document.getElementById("btn-confirm");
    confirmButton.onclick = () => deleteUser(userId);
}
function deleteUser(userId) {
    console.log(`User with ID ${userId} has been deleted.`);
    const modal = document.querySelector(".model-confirm");
    modal.style.display = "none";
    const updatedUsers = users.filter(user => user.id !== userId);
    createTable(updatedUsers);
}
document.getElementById("btn-cancel").onclick = () => {
    const modal = document.querySelector(".model-confirm");
    modal.style.display = "none";
};
function edit(id) {
    console.log(id,'111111');
    window.location.href = `edit-user.html?id=${id}`;
}
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    const burger = document.getElementById('burger-menu');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.createElement('div');
    overlay.classList.add('sidebar-overlay');
    document.body.appendChild(overlay);

    burger.addEventListener('click', () => {
      sidebar.classList.toggle('active');
   
      overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
      sidebar.classList.remove('active');
     
      overlay.classList.remove('active');
    });
  });