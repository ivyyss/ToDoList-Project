import React from 'react';
import './Livepic.css';

export default class Livepic extends React.Component{
    render(){
        let initCss='iconfont icon-smile-copy'
        const indexArray=[1,2,3,4,5,6]
        let completedArray = indexArray.map((item)=>{
            if(item<=this.props.completedCount){
                return initCss + ' active' //true
            }else{
                return initCss //false
            }
        })
        return (
            <div className='pic'>{
                completedArray.map((item,index)=>{
                    return <i className={item} key={index}></i>
                })
            }
            <span>...</span>
            </div>
        )
    }
}