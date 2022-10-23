// Write your code here
import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appId, appName, imageUrl, category} = eachApp
  return (
    <li className="app-item">
      <img src={imageUrl} className="img" alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
