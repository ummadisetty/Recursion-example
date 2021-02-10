import React from 'react';
import '../App.css'

function FlexiForm(props) {
  const configChildren = props.configData;
  return (
    <div className="border-box">
      {configChildren.items.map((element, key) => {
        return <div>
          {element.label} :
            {element.type === 'TextField' && <input type='text' value={element[element['name']]} onChange={(e) => props.setDynamicVal(element.key, e.target.value)} />}
          {element.type === 'DropDown' && <select value={element[element['name']]} onChange={(e) => props.setDynamicVal(element.key, e.target.value)}>
            {
              element.values.map(dropval =>
                <option value={dropval}>{dropval}</option>
              )
            }
          </select>}
        </div>
      })
      }
      {
        configChildren.children.map((child, key) => {
          return <FlexiForm configData={child} setDynamicVal={props.setDynamicVal} />
        })
      }
    </div>
  );
}

export default FlexiForm;