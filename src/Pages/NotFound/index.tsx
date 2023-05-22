import logoImg from '../../assets/images/logo.svg'

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '100vh'
    }}>
      <img src={logoImg} alt="Letmeask" />
      <h1>403 - Not Found</h1>
      <a href="/">Vá para página principal</a>
    </div>
  )
}
