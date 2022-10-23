const player = {
    host: false,
    playedCell: "",
    roomId: null,
    username: "",
    socketId: "",
    symbol: "X",
    turn: false,
    win: false
};

const socket = io();

const usernameInput = document.getElementById('username');
const userCard = document.getElementById('user-card');
const waitingArea = document.getElementById('waiting-area');

socket.emit('get rooms');
socket.on('list rooms', (rooms) => {
    let html = "";
    if (rooms.players.length !== 2 ){
        html += `<li class="list-group-item d-flex justify-content-between">
        <p class="p-0 m-0 flex-grow-1 fw-bold">Salon de ${room.players[0].username} - ${room.id}</p>
        <button class="btn btn-sm btn-success join-room" data-room="${room.id}">Rejoindre</button>
    </li>`;
    }
})

$("#form").on('submit', function (e) {
    e.preventDefault();

    player.username = usernameInput.value;
    player.host = true;
    player.turn = true;
    player.socketId = socket.id;

    userCard.hidden = true;
    waitingArea.classList.remove('d-none');

    socket.emit('playerData', player);
})