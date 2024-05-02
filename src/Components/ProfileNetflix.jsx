import MyHeroProfile from "./MyHeroProfile"
import MyNavProfile from "./MyNavProfile"
// questo è il componente principale che assembla i due componenti della nostr apagina profilo
const ProfileNetflix = () => {
  return (
    <>
      <header className="App-header">
        <MyNavProfile />
        <MyHeroProfile />
      </header>
    </>
  )
}
export default ProfileNetflix
