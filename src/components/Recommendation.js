function Recommendation () {

    //je recup le mois en cours
    const currentMonth = new Date().getMonth()
    //si le mois est entre mars et juin (janvier=0), isSpring = true
    const isSpring = currentMonth <= 2 && currentMonth >= 5
   
    if (!isSpring) {
        return <div>Ce n'est pas le moment de rempoter</div>
    } return <div>C'est le printemps, rempotez !</div>

}

export default Recommendation