import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment-timezone';

class Analog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ctx:0,
            radius:0
        };
    }
    drawHand(ctx, pos, length, width) {
        ctx.beginPath();
        // width of clockwise
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.moveTo(0, 0);
        ctx.rotate(pos);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-pos);
    }
    
    drawFace(ctx, radius) {
        var grad;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
        // color of clockwise
        grad.addColorStop(0, '#333');
        // border of clock
        grad.addColorStop(0.5, 'white');
        // color of border
        grad.addColorStop(1, '#333');
        ctx.strokeStyle = grad;
        // border btween border and background
        ctx.lineWidth = radius * 0.1;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
        ctx.fillStyle = 'green';

        ctx.fill();
    }
    drawNumbers(ctx, radius) {
        var ang;
        var num;
        ctx.font = radius * 0.15 + "px arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        for (num = 1; num < 13; num++) {
            ang = num * Math.PI / 6;
            ctx.rotate(ang);
            ctx.translate(0, -radius * 0.85);
            ctx.rotate(-ang);
            ctx.fillText(num.toString(), 0, 0);
            ctx.rotate(ang);
            ctx.translate(0, radius * 0.85);
            ctx.rotate(-ang);
        }
    }
    drawTime(ctx, radius) {
        var formatH = 'HH';
        var formatM = 'mm';
        var formatS = 'ss';
        var hour = moment().utcOffset(this.props.utcDiff*60).format(formatH);
        var minute = moment().utcOffset(this.props.utcDiff*60).format(formatM);
        var second = moment().utcOffset(this.props.utcDiff*60).format(formatS);
        //hour
        hour = hour % 12;
        hour = (hour * Math.PI / 6) +
            (minute * Math.PI / (6 * 60)) +
            (second * Math.PI / (360 * 60));
        this.drawHand(ctx, hour, radius * 0.5, radius * 0.07);
        //minute
        minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
        this.drawHand(ctx, minute, radius * 0.8, radius * 0.07);
        // second
        second = (second * Math.PI / 30);
        this.drawHand(ctx, second, radius * 0.9, radius * 0.02);
    }

    drawClock = () => {
        this.drawFace(this.state.ctx, this.state.radius);
        this.drawNumbers(this.state.ctx, this.state.radius);
        this.drawTime(this.state.ctx, this.state.radius);
    }
    
    componentDidMount() {
        var tmpradius ;
        var canvas = this.refs.mycanvas;
        var container = this.refs.container;
        canvas.height = container.clientWidth < container.clientHeight ? container.clientWidth : container.clientHeight ;
        canvas.width = canvas.height ;

        this.setState(
            {
                ctx: canvas.getContext("2d"),
                radius: canvas.height / 2 *0.9
            }, 
            () => {
                tmpradius = this.state.radius/0.9; 
                this.state.ctx.translate(tmpradius, tmpradius);
                setInterval(this.drawClock, 1000);
            }
        );
        
    }
    
    componentWillUnmount() {
        clearInterval();
    }

    render() {
        return (
            <div className='analog' ref='container' >
                <canvas className="canvas" ref="mycanvas"></canvas>
            </div>
        );
    }
}
export default Analog;