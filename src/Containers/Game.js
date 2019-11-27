import React from 'react';
import Choice from './Choice';
import Info from '../Components/Info';
import Button from '../Components/Button';

export default class Game extends React.Component{
    constructor(props){
        super(props);
        var arr=Array(3);
        for(let i=0;i<3;i++){
            arr[i]=new Array(3);
        }
     
        this.state={started: false, player1:'', player2:'', turn:'' ,matrix:arr ,over:false ,winner:'', moves:0};
    }
    setMatrix(i,j,bool){
        let arr=this.state.matrix;
        arr[i][j]=bool;
        let move=this.state.moves;
        this.setState({...this.state,matrix:arr,turn: this.state.turn==='Player 1'?'Player 2':'Player 1',moves: ++move});
    }
    buttonClick(event){
       let loc=event.target.id;
        let coord=loc.split(',');
        let i=coord[0];
        let j=coord[1];
        this.setMatrix(i,j,this.state.turn==='Player 1'?this.state.player1:this.state.player2);
        if(this.state.moves>=4){
        let win=this.gameOver();
        if(win===0 && this.state.moves>=8)
       {
        this.setState({...this.state,over:true,winner:'draw'}); //draw
       }
       else if(win!==0){
           this.setState({...this.state,over:true,winner:win,})
       }
    }
    }
    equals(arr){
       if(arr[0]===arr[1] && arr[1]===arr[2] && (arr[0]===true || arr[0]===false )){
           return arr[0];
       } 
       
    }
    checkGameOver(){
       
        let arr=this.state.matrix;
       
        for(let i=0;i<3;i++){
            let vals=[];
            for(let j=0;j<3;j++){
                vals.push(arr[i][j]);
                
                if(this.equals(vals)===true || this.equals(vals)===false){
                    return vals[0];

                }
               
            }
            vals=[];
            for(let j=0;j<3;j++){
                vals.push(arr[j][i]);
                if(this.equals(vals)===true || this.equals(vals)===false){
                
                    return vals[0];
                   
                }
                
            }
            
        }
     
     let vals=[arr[0][0],arr[1][1],arr[2][2]];
   
     if(this.equals(vals)===true || this.equals(vals)===false){
     
         return vals[0];
         
     }
    vals=[arr[0][2],arr[1][1],arr[2][0]];
    
    if(this.equals(vals)===true || this.equals(vals)===false){
        
        return vals[0];
        
    }
    return 0;
    }
    gameOver(){
       let win=this.checkGameOver();
       
    if(win!==0){
       
        let winPlayer='';
        if(this.state.player1===win){
            winPlayer="Player 1";
        }
        else if(this.state.player2===win){
            winPlayer="Player 2";
        }
       
        return winPlayer;
    }
    return 0;
    }
    playerSelect(event){
        
        let plr1=''
        if(event.target.innerText==='0'){
            plr1=true;
        }
        else{
            plr1=false;
        }
        this.setState({...this.state, started: true, player1: plr1, player2: !plr1, turn: 'Player 1',});
    }
    getValue(i,j){
        var str=" ";
        if(this.state.matrix[i][j]===true){
            str="0";
        }
        else if(this.state.matrix[i][j]===false){
            str="X";
        }
        else{
            str="."
        }
        
        return str;
    }
    getInfo(){
        var info='';
        if(this.state.over===false){
        if(this.state.started){
            info=this.state.turn+", Its your turn";
        }
        else {
            info="Player 1, Please make your choice";
        }}
        else if(this.state.over===true){
            if(this.state.winner==='draw'){
                info="The game has been drawn";
            }
            else
         info="Game over, "+this.state.winner+" has won";
        }
       
       return info; 
    }  
    restart(){
        var arr=Array(3);
        for(let i=0;i<3;i++){
            arr[i]=new Array(3);
        }
   
        this.setState({started: false, player1:'', player2:'', turn:'' ,matrix:arr ,over:false ,winner:'', moves:0});
    }
    
    render(){
       

        var jsx=this.state.started? <div>
        <Button onclick={this.buttonClick.bind(this)} value={this.getValue(0,0)} id="0,0" started={this.state.started}/>
        <Button onclick={this.buttonClick.bind(this)} value={this.getValue(0,1)} id="0,1"started={this.state.started}/>
        <Button onclick={this.buttonClick.bind(this)} value={this.getValue(0,2)} id="0,2"started={this.state.started}/>
        <br/>
        <Button onclick={this.buttonClick.bind(this)} value={this.getValue(1,0)} id="1,0"started={this.state.started}/>
        <Button onclick={this.buttonClick.bind(this)} value={this.getValue(1,1)} id="1,1"started={this.state.started}/>
        <Button onclick={this.buttonClick.bind(this)} value={this.getValue(1,2)} id="1,2"started={this.state.started}/>
        <br/>
        <Button onclick={this.buttonClick.bind(this)} value={this.getValue(2,0)} id="2,0"started={this.state.started}/>
        <Button onclick={this.buttonClick.bind(this)} value={this.getValue(2,1)} id="2,1"started={this.state.started}/>
        <Button onclick={this.buttonClick.bind(this)} value={this.getValue(2,2)} id="2,2"started={this.state.started}/>
        </div>
        :<Choice onClick={this.playerSelect.bind(this)} started={this.state.started}/>
        return(<div align="center">
        <Info info={this.getInfo()}/>
        <br/>
        {this.state.over===true?<><Button onclick={this.restart.bind(this)} value="Restart Game"/></>:jsx}
        </div>);
    }
}
