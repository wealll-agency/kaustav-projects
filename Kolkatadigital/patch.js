const fs = require('fs');
const filepath = 'assets/css/style.css';
let content = fs.readFileSync(filepath, 'utf-8');

const regex = /\.ar_timeline_step_item\s*\{\s*position:\s*relative;\s*\.ar_report_bg_icon\s*\{/;

if (!regex.test(content)) {
    console.log('Regex not found!');
    process.exit(1);
}

const replacement = `.ar_timeline_step_item {
    position: relative;
    padding-left: 80px;
    margin-bottom: 40px;
    transition: transform 0.3s ease;
    cursor: default;
}
.ar_timeline_step_item.last-step {
    margin-bottom: 0;
}
.ar_timeline_step_item:hover {
    transform: translateX(10px);
}
.ar_step_node_circle {
    position: absolute;
    left: 15px;
    top: 0;
    width: 32px;
    height: 32px;
    background: #fff;
    border: 4px solid #0a1128;
    border-radius: 50%;
    z-index: 2;
    transition: all 0.3s ease;
}
.ar_step_node_circle.active {
    border-color: #ee710f;
    box-shadow: 0 0 0 5px rgba(238,113,15,0.1);
}
.ar_timeline_step_item:hover .ar_step_node_circle {
    border-color: #ee710f;
    transform: scale(1.2);
    box-shadow: 0 0 15px rgba(238,113,15,0.4);
}
.ar_step_title {
    font-weight: 800;
    font-size: 22px;
    color: #0a1128;
    margin-bottom: 10px;
}
.ar_step_desc {
    color: #666;
    font-size: 16px;
    line-height: 1.6;
}

/* Section 4: Tech Stack */
.ar_tech_stack_section {
    padding: 120px 0;
    background: #050814;
    color: #fff;
    position: relative;
    overflow: hidden;
}
.ar_tech_grid_bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.05;
    background-image: linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px);
    background-size: 50px 50px;
    z-index: 0;
}
.ar_tech_orb_1 {
    position: absolute;
    top: -100px;
    left: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(238, 113, 15, 0.15) 0%, transparent 70%);
    filter: blur(50px);
    z-index: 0;
}
.ar_tech_orb_2 {
    position: absolute;
    bottom: -150px;
    right: -100px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(10, 17, 40, 0.8) 0%, transparent 70%);
    filter: blur(50px);
    z-index: 0;
}
.ar_tech_title {
    font-size: 46px;
    font-weight: 900;
    margin-bottom: 20px;
}
.ar_tech_title span {
    color: #ee710f;
}
.ar_tech_desc {
    font-size: 18px;
    color: rgba(255,255,255,0.6);
    max-width: 650px;
    margin: 0 auto 60px;
}
.ar_tech_item_card {
    background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 24px;
    padding: 40px 20px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
    z-index: 1;
    height: 100%;
}
.ar_tech_item_card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 0%, rgba(238, 113, 15, 0.15) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
}
.ar_tech_item_card:hover::before {
    opacity: 1;
}
.ar_tech_item_card:hover {
    transform: translateY(-15px);
    border-color: rgba(238, 113, 15, 0.5);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(238, 113, 15, 0.1);
}
.ar_tech_item_card i {
    font-size: 50px;
    color: #fff;
    margin-bottom: 20px;
    display: block;
    transition: all 0.4s ease;
    filter: drop-shadow(0 5px 15px rgba(255,255,255,0.1));
}
.ar_tech_item_card:hover i {
    color: #ee710f;
    transform: scale(1.1);
    filter: drop-shadow(0 10px 20px rgba(238, 113, 15, 0.4));
}
.ar_tech_item_card span {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    color: rgba(255,255,255,0.8);
    transition: all 0.4s ease;
}
.ar_tech_item_card:hover span {
    color: #fff;
}

/* Section 5: Reports */
.ar_report_types_section {
    padding: 120px 0;
    background: #fbfcfc;
}
.ar_report_title {
    font-size: 48px;
    font-weight: 900;
    color: #0a1128;
}
.ar_report_title span {
    color: #ee710f;
}
.ar_report_link {
    color: #ee710f;
    font-weight: 700;
    font-size: 18px;
    text-decoration: none;
    border-bottom: 2px solid #ee710f;
    padding-bottom: 5px;
    transition: all 0.3s ease;
}
.ar_report_link:hover {
    color: #0a1128;
    border-color: #0a1128;
}
.ar_report_item_card {
    background: #fff;
    border-radius: 25px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    border-top: 5px solid #0a1128;
    transition: all 0.4s ease;
    height: 100%;
    position: relative;
}
.ar_report_item_card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.1);
    border-top-color: #ee710f;
}
.ar_report_item_card.active_card {
    box-shadow: 0 20px 50px rgba(238,113,15,0.1);
    border-top-color: #ee710f;
    transform: translateY(-10px);
}
.ar_report_card_title {
    font-weight: 800;
    font-size: 22px;
    margin-bottom: 15px;
    color: #0a1128;
}
.ar_report_card_desc {
    color: #666;
    margin-bottom: 20px;
    line-height: 1.6;
}
.ar_report_bg_icon {`;

content = content.replace(regex, replacement);
fs.writeFileSync(filepath, content, 'utf-8');
console.log('Patched style.css successfully!');
