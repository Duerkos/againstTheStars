let h=()=>({events:{},emit(t,...e){(this.events[t]||[]).forEach(s=>s(...e))},on(t,e){return(this.events[t]=this.events[t]||[]).push(e),()=>this.events[t]=(this.events[t]||[]).filter(s=>s!==e)}});export{h as c};
