// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTab, updateActiveTabId, isActive} = props
  const {tabId, displayText} = eachTab

  const activeTabClassName = isActive ? 'active-tab' : ''

  const onChangeTabId = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab">
      <button
        className={`btn ${activeTabClassName}`}
        type="button"
        onClick={onChangeTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
