<script>
</script>
<template>
    <div class="header">

        <h3 class="status">{Estatus}</h3>
    </div>
    <div class="cards">

        <div class="card">
            <h3>{NombreCliente}</h3>
            <h3>{Oferta}</h3>
            <h3>{Contacto}</h3>
            <h3>{Telefono}</h3>
            <h3>{AccOwner}</h3>
        </div>
    </div>
</template>

<style scoped>
.header{
    display: flex;
    justify-content: space-evenly;
}
.status{
    color: var(--colorFuenteTexto);
}
.cards {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}

.card {
    color: var(--colorFuenteTexto);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-radius: 7px;
    background-color: var(--colorBackgroundCards); 
    width: 400px;
    height: 200px;
}

.card-title {
    display: 100%;

}

.header {
    color: black;

}

@media (max-width: 480px) {

    .card {
        max-width: 80%;
    }

}
</style>
