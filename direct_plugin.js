function get_antimatter_bonus(a){ // 反物质和能力效力对攻击防御魔防属性的加成
	var world_mult=[1,1,1,1,0.2,0.4,0.1][(core.status.hero.flags.world||0)];
	if(core.status.hero.flags.lcb >= 3)world_mult=1;
	if(core.status.hero.flags.l4>=1 && core.status.hero.flags.lcb >= 2)world_mult=1;
	if(core.status.hero.flags.l3>=1 && core.status.hero.flags.lcb >= 3 && a=='atk')return (497.903033507482205794576+Math.pow(infAdd(core.status.hero.money,128),2)/10)*(1+core.itemCount("I731"))*world_mult;
	if(core.status.hero.flags.l3>=1 && core.status.hero.flags.lcb >= 3 && a=='def')return (199.16121340299288231783+Math.pow(infAdd(core.status.hero.money,128),2)/25)*(1+core.itemCount("I731"))*world_mult;
	if(core.status.hero.flags.l3>=1 && core.status.hero.flags.lcb >= 3 && a=='mdef')return (124.475758376870551448644+Math.pow(infAdd(core.status.hero.money,128),2)/40)*(1+core.itemCount("I731"))*world_mult;
	if(core.status.hero.flags.l2>=1 && core.status.hero.flags.lcb >= 3 && a=='atk')return (50+Math.pow(infAdd(core.status.hero.money,64),2)/15)*(1+core.itemCount("I731"))*world_mult;
	if(core.status.hero.flags.l2>=1 && core.status.hero.flags.lcb >= 3 && a=='def')return (30+Math.pow(infAdd(core.status.hero.money,64),2)/35)*(1+core.itemCount("I731"))*world_mult;
	if(core.status.hero.flags.l2>=1 && core.status.hero.flags.lcb >= 3 && a=='mdef')return (10+Math.pow(infAdd(core.status.hero.money,64),2)/55)*(1+core.itemCount("I731"))*world_mult;
	if(core.status.hero.flags.l5>=1 && core.status.hero.flags.lcb >= 2 && a=='atk')return (15+Math.pow(infAdd(core.status.hero.money,32),2)/20)*(1+core.itemCount("I731"))*world_mult;
	if(core.status.hero.flags.l5>=1 && core.status.hero.flags.lcb >= 2 && a=='def')return (10+Math.pow(infAdd(core.status.hero.money,32),2)/50)*(1+core.itemCount("I731"))*world_mult;
	if(core.status.hero.flags.l5>=1 && core.status.hero.flags.lcb >= 2 && a=='mdef')return (5+Math.pow(infAdd(core.status.hero.money,32),2)/80)*(1+core.itemCount("I731"))*world_mult;
	if(core.status.hero.flags.l5>=1 && core.status.hero.flags.lcb >= 2 && a=='atk')return (15+Math.pow(infAdd(core.status.hero.money,32),2)/20)*(1+core.itemCount("I731"))*world_mult;
	if(core.status.hero.flags.l5>=1 && core.status.hero.flags.lcb >= 2 && a=='def')return (10+Math.pow(infAdd(core.status.hero.money,32),2)/50)*(1+core.itemCount("I731"))*world_mult;
	if(core.status.hero.flags.l5>=1 && core.status.hero.flags.lcb >= 2 && a=='mdef')return (5+Math.pow(infAdd(core.status.hero.money,32),2)/80)*(1+core.itemCount("I731"))*world_mult;
	if(core.status.hero.flags.l6>=1 && core.status.hero.flags.lcb >= 2 && a=='atk')return (4+Math.pow(infAdd(core.status.hero.money,16),1.75)/12)*(1+core.itemCount("I731"))*world_mult;
	if(core.status.hero.flags.l6>=1 && core.status.hero.flags.lcb >= 2 && a=='def')return (3+Math.pow(infAdd(core.status.hero.money,16),1.75)/22)*(1+core.itemCount("I731"))*world_mult;
	if(core.status.hero.flags.l6>=1 && core.status.hero.flags.lcb >= 2 && a=='mdef')return (2+Math.pow(infAdd(core.status.hero.money,16),1.75)/32)*(1+core.itemCount("I731"))*world_mult;
	if(core.status.hero.flags.l8>=1 && core.status.hero.flags.lcb >= 1 && a=='atk')return (2+Math.pow(infAdd(core.status.hero.money,8),1.5)/7)*(1+core.itemCount("I731"))*world_mult;
	if(core.status.hero.flags.l8>=1 && core.status.hero.flags.lcb >= 1 && a=='def')return (1.75+Math.pow(infAdd(core.status.hero.money,8),1.5)/12)*(1+core.itemCount("I731"))*world_mult;
	if(core.status.hero.flags.l8>=1 && core.status.hero.flags.lcb >= 1 && a=='mdef')return (1.5+Math.pow(infAdd(core.status.hero.money,8),1.5)/16)*(1+core.itemCount("I731"))*world_mult;
	if(core.status.hero.flags.l1>=1 && core.status.hero.flags.lcb >= 1 && a=='atk')return (1+Math.pow(infAdd(core.status.hero.money,4),1.25)/5)*(1+core.itemCount("I731"))*world_mult;
	if(core.status.hero.flags.l1>=1 && core.status.hero.flags.lcb >= 1 && a=='def')return (1+Math.pow(infAdd(core.status.hero.money,4),1.25)/7.5)*(1+core.itemCount("I731"))*world_mult;
	if(core.status.hero.flags.l1>=1 && core.status.hero.flags.lcb >= 1 && a=='mdef')return (1+Math.pow(infAdd(core.status.hero.money,4),1.25)/10)*(1+core.itemCount("I731"))*world_mult;
	return (1+Math.max(core.status.hero.money,0)/7)*(1+core.itemCount("I731"))*world_mult;
}

function format_antimatter_bonus(a){ // 格式化反物质和能力效力对属性的加成
	let bonus=get_antimatter_bonus(a);
	if(bonus<10)return "×"+bonus.toFixed(2);
	if(bonus<100)return "×"+bonus.toFixed(1);
	if(bonus<100000)return "×"+Math.floor(bonus);
	return "×"+infFormat(Math.log10(bonus));
}

function dimension_production(a){ // 反物质维度生产反物质
	var world_mult=[0,0,Math.min(-0.60205999132796239042747,2-0.2*core.itemCount('I729')),-2,-3,-4,-5][(core.status.hero.flags.world||0)];
	if(core.status.hero.flags.l8>=1 && core.status.hero.flags.lcb >= 3)world_mult/=2;
	for(let i=8;i>=2;i--){
		if(core.status.hero.flags['dimamount'+i]>-50)core.status.hero.flags['dimamount'+(i-1)]=infAdd(core.status.hero.flags['dimamount'+i]+Math.log10(a)+get_dimension_mult(i),core.status.hero.flags['dimamount'+(i-1)]);
	}
	core.status.hero.money=infAdd(core.status.hero.flags['dimamount1']+Math.log10(a)+get_dimension_mult(1),core.status.hero.money);
	if(core.status.hero.money>308.25471556)core.status.hero.money=308.25471556;
	if(core.status.hero.flags.lcb >= 2 || (core.status.hero.flags.lcb >= 1 && core.status.hero.flags.l2)){
		for(let i=1;i<=(core.status.hero.flags.lcb >= 3 ?8:((core.status.hero.flags. l2 >= 1 && core.status.hero.flags.lcb >= 2)?8:4));i++)while(core.status.hero.money>=get_dimension_price(i)){
			core.status.hero.flags['dimamount'+i]=infAdd(core.status.hero.flags['dimamount'+i],0);
			core.status.hero.flags['sh'+i]=core.status.hero.flags['sh'+i]+1;
		}
	}
}

function get_dimension_mult(a){ // 获取反物质维度生产
	var world_mult=[0,0,Math.min(-0.60205999132796239042747,2-0.2*core.itemCount('I729')),-2,-3,-4,-5][(core.status.hero.flags.world||0)];
	if(core.status.hero.flags.l8>=1 && core.status.hero.flags.lcb >= 3)world_mult/=2;
	return (a==1?0:(-a/2))+Math.log10(2+(core.status.hero.flags.fwz2||0))*core.itemCount('I729')+core.status.hero.flags['sh'+a]*dimMult()+Math.log10(1+(core.itemCount('coin')||0))+Math.log10(((core.status.hero.flags. l1 >= 1 && core.status.hero.flags.lcb >= 2)||(core.status.hero.flags.lcb >= 3))?core.itemCount('I848'):1)+Math.log10((core.status.hero.flags.l1 >= 1 && core.status.hero.flags.lcb >= 3)?matterBonus():1)+world_mult
}

function buy_dimension(a){ // 购买反物质维度
	if(core.status.hero.money>=get_dimension_price(a)){
		core.status.hero.money=infSubtract(core.status.hero.money,get_dimension_price(a));
		core.status.hero.flags['dimamount'+a]=infAdd(core.status.hero.flags['dimamount'+a],0);
		core.status.hero.flags['sh'+a]=core.status.hero.flags['sh'+a]+1;
	}
	core.drawStatusBar();
}

function get_dimension_price(a){ // 反物质维度价格
	let p=0;
	if(a==1)p=1+Math.pow(core.status.hero.flags.sh1,1.1);
	if(a==2)p=2+Math.pow(core.status.hero.flags.sh2*1.2,1.1);
	if(a==3)p=3+Math.pow(core.status.hero.flags.sh3*1.4,1.1);
	if(a==4)p=4+Math.pow(core.status.hero.flags.sh4*1.6,1.1);
	if(a==5)p=5+Math.pow(core.status.hero.flags.sh5*1.8,1.1);
	if(a==6)p=6+Math.pow(core.status.hero.flags.sh6*2,1.1);
	if(a==7)p=7+Math.pow(core.status.hero.flags.sh7*2.2,1.1);
	if(a==8)p=8+Math.pow(core.status.hero.flags.sh8*2.4,1.1);
	let sc=50;
	if(core.status.hero.flags. l3 >= 1 && core.status.hero.flags.lcb >= 2)sc=150;
	if(core.status.hero.flags.lcb >= 3)sc=150;
	if(core.status.hero.flags. l4 >= 1 && core.status.hero.flags.lcb >= 3)sc=300;
	if(p>sc)p=Math.pow(p/sc,1.5)*sc;
	return p;
}

function getMatterGain(){ // 离开世界时可以得到的正物质
	return Math.pow(10,Math.sqrt(Math.max(core.status.hero.money,0)+1));
}

function addMatter(){ // 离开世界时反物质维度的处理
	core.status.hero.exp=core.status.hero.exp+getMatterGain();
	initAntimatter();
}

function dimMult(){ // 基于星系得到的反物质维度乘数
	if(core.itemCount('I848')<3)return 0;
	let world_mult=[1,1,1,0.5,0.3,0.2,0.2][(core.status.hero.flags.world||0)];
	if(core.status.hero.flags.lcb >= 3)world_mult=1;
	if(core.status.hero.flags.l8>=1 && core.status.hero.flags.lcb >= 2)world_mult=1;
	let galaxy=core.itemCount('I848')*world_mult;
	if(galaxy>=25)galaxy=Math.sqrt(galaxy)*5;
	if(galaxy>=50)galaxy=Math.sqrt(galaxy*50);
	return Math.sqrt(galaxy)*0.02;
}

function initAntimatter(){ // 初始化反物质和维度
	//alert(core.status.hero.flags.anti)
	core.status.hero.money=Math.log10((core.status.hero.flags.anti||0)+10);
	for(let i=8;i>=1;i--){
		core.status.hero.flags['dimamount'+i]=-100;core.status.hero.flags['sh'+i]=0;
	}
	core.drawStatusBar();
	if(core.status.hero.flags.lcb >= 2 || (core.status.hero.flags.lcb >= 1 && core.status.hero.flags.l2)){
		for(let i=1;i<=(core.status.hero.flags.lcb >= 3 ?8:((core.status.hero.flags. l2 >= 1 && core.status.hero.flags.lcb >= 2)?8:4));i++)while(core.status.hero.money>=get_dimension_price(i)){
			core.status.hero.flags['dimamount'+i]=infAdd(core.status.hero.flags['dimamount'+i],0);
			core.status.hero.flags['sh'+i]=core.status.hero.flags['sh'+i]+1;
		}
	}
}

function matterBonus(){
	return 1+Math.pow(1+core.status.hero.exp,0.1);
}