const G = "准入与偏好";
const sections = [
  { id: "gate", title: "先认识你的生活", subtitle: "几件实际的小事，会决定哪些伙伴适合走进家里。", label: "第一站 · 准备情况" },
  { id: "life", title: "你的日常节奏", subtitle: "把平常的一周想一想，按能长期做到的情况选择。", label: "第二站 · 生活习惯" },
  { id: "home", title: "你们要一起住的家", subtitle: "空间、声音和家人，都会影响相处的舒适度。", label: "第三站 · 居住环境" },
  { id: "bond", title: "你期待怎样相处", subtitle: "想摸摸、一起玩，还是静静看它做自己的事？", label: "第四站 · 互动偏好" },
  { id: "self", title: "你的相处方式", subtitle: "这里没有标准性格，只有彼此更合拍的节奏。", label: "第五站 · 性格" },
  { id: "care", title: "你能提供的照顾", subtitle: "想象日常照护，也想想偶尔需要帮忙的时候。", label: "第六站 · 照护准备" },
  { id: "risk", title: "生活中的小意外", subtitle: "最后确认一些可能发生的小状况。", label: "第七站 · 接受程度" },
];

const question = (id, section, text, options, weight = 0, multi = false) => ({ id, section, text, options, weight, multi });
const questions = [
  question("G1", G, "如果今天带一位新室友回家，房子会答应吗？", ["明确允许养宠", "允许，但品类、体型或数量有限制", "明确不允许", "还没问过"]),
  question("G2", G, "家里其他人准备好迎接这位新室友了吗？", ["都同意，也愿意配合", "同意，但主要由我照顾", "还在商量", "明确反对", "我独居"]),
  question("G3", G, "家里有人一靠近某些动物就会不舒服吗？", ["没有已知问题", "有轻度限制，知道如何避开", "有严重过敏或健康限制", "还不确定"]),
  question("G4", G, "你心动的宠物，在当地能合法饲养、通过合规渠道获得吗？", ["已确认", "得按具体种类再查", "知道有些种类不允许", "完全没了解过"]),
  question("G5", G, "如果未来搬家、加班或出远门，谁来照顾它？", ["有稳定照护人和备用安排", "有主要照护人，备用安排还没定", "变化较多，暂时没安排", "现在还无法承诺长期照顾"]),
  question("G6", G, "你有没有已经偷偷心动的宠物大类？", ["猫", "狗", "鸟类", "小型哺乳动物", "爬行类（守宫、蜥蜴等）", "鱼类／其他水族", "暂时没有偏好", "其他（请填写）"], 0, true),
  question("Q1", "life", "每天留给这位新室友的专属时间，大概有多少？", ["不到20分钟", "20～59分钟", "1～2小时", "超过2小时"], 6),
  question("Q2", "life", "工作日你出门后，它通常要自己待多久？", ["少于4小时", "4～8小时", "8～12小时", "超过12小时或每天差别很大"], 5),
  question("Q3", "life", "除了喂食，你每天还能陪它活动多久？", ["不到15分钟", "15～30分钟", "30～60分钟", "超过60分钟"], 5),
  question("Q4", "life", "你的作息像时钟，还是像开盲盒？", ["基本固定", "偶尔晚归", "经常变化", "长期轮班或昼夜颠倒"], 3),
  question("Q5", "life", "一个月里，你通常有几天不在家过夜？", ["0～1天", "2～4天", "5～10天", "超过10天"], 3),
  question("Q6", "life", "喂食之后，清洁这件事你能跟上什么节奏？", ["每天可以处理多次", "每天一次", "每周集中处理几次", "很难保持固定频率"], 3),
  question("Q7", "home", "家里能给它留出多大的“专属地盘”？", ["暂时没有固定位置", "能安排稳定的专属区域", "有专属区域，也有室内活动空间", "还有合适的独立活动空间或户外条件"], 5),
  question("Q8", "home", "家里和邻居对“宠物有话说”有多宽容？", ["基本需要安静", "偶尔出声可以", "规律性的叫声或活动声可以", "声音限制较少"], 4),
  question("Q9", "home", "这位新室友将和谁一起生活？", ["仅成年人", "学龄前儿童", "需要照护的老人", "其他需要特别考虑健康或安全的成员"], 4, true),
  question("Q10", "home", "家里已经有哪位“原住民”了？", ["目前没有", "犬", "猫", "鸟或小型哺乳动物", "水族或爬宠", "其他宠物"], 4, true),
  question("Q11", "home", "如果它对温度、湿度或设备有要求，你能照顾到什么程度？", ["无法额外调节", "能做基本的季节调节", "能维持稳定的室内环境", "能长期维护专门设备并监测"], 3),
  question("Q12", "bond", "理想的一天里，你想和它玩或相处多久？", ["偶尔看看就很满足", "短时间互动一下", "一天互动好几次", "想要长时间陪伴"], 5),
  question("Q13", "bond", "对于摸摸、抱抱、贴贴，你期待到什么程度？", ["不需要身体接触", "偶尔摸摸", "希望经常抚摸", "很希望能抱持或贴近"], 4),
  question("Q14", "bond", "教它建立生活规则或练习互动，你会觉得……", ["没什么兴趣", "基础规则可以学", "愿意定期练习", "这正是养宠的乐趣之一"], 4),
  question("Q15", "bond", "想象你们在一起的画面，哪幅最让你心动？", ["安静地看它活动", "它在家陪着我", "一起玩耍或外出", "练习互动，看它慢慢学会回应"], 4),
  question("Q16", "bond", "如果它很有自己的想法，不常主动搭理你呢？", ["完全没关系", "大多能接受", "会有点失落", "我会很难接受"], 3),
  question("Q17", "self", "同一件事教了很多遍，它还是没学会，你会怎样？", ["很容易失去耐心", "愿意试，但希望快点见效", "能花几周慢慢调整", "能长期循序引导"], 4),
  question("Q18", "self", "原本安排好的夜晚，突然要处理它的事，你会怎样？", ["很难接受", "偶尔可以", "能重新安排", "通常能从容处理"], 3),
  question("Q19", "self", "沙发上有毛、东西被挪动，心里的“小警报”会响吗？", ["会，我很在意整洁", "会有点介意", "适度变化可以接受", "我比较宽容"], 3),
  question("Q20", "self", "每天重复喂养、清理和检查，对你来说是……", ["很难坚持", "有提醒才能坚持", "基本能坚持", "我喜欢稳定的日常"], 3),
  question("Q21", "self", "你想亲近它，它却转身忙自己的事，你会怎样？", ["容易受挫", "需要一点时间适应", "能尊重它的节奏", "会观察它喜欢怎样相处"], 2),
  question("Q22", "care", "每个月给它准备的“生活费”，你能稳定留出多少？", ["低于200元", "200～499元", "500～999元", "1000元及以上"], 4),
  question("Q23", "care", "如果它突然生病，你的应急小金库准备得怎样？", ["暂时没有安排", "可承担约1000元", "可承担约3000元", "有更充足的储备或可靠保障"], 4),
  question("Q24", "care", "如果它需要看医生，找到合适的医院方便吗？", ["还没查过", "有渠道，但往返不方便", "可以较方便地就医", "已有稳定的专业就医渠道"], 3),
  question("Q25", "care", "养宠知识这门“新课”，你愿意学到哪一步？", ["只想了解最基本的", "愿意学习基础照护", "愿意持续学习", "会主动查证，并根据情况调整做法"], 2),
  question("Q26", "care", "面对喂食、设备和环境维护，你想接什么难度的任务？", ["越简单越好", "能接受固定的每日维护", "能接受定期设备维护", "能接受较复杂的管理"], 2),
  question("Q27", "risk", "衣服上、地板上出现毛毛或羽粉，你会？", ["完全不能接受", "只能接受很少量", "定期清理就可以", "接受度很高"], 1),
  question("Q28", "risk", "它偶尔突然开嗓，甚至半夜发出动静，你会？", ["完全不能接受", "只能接受偶发声音", "规律性的声音可以接受", "接受度很高"], 1),
  question("Q29", "risk", "每天与排泄物、气味和清洁工具打交道，你会？", ["完全不能接受", "只能接受很少量", "每天清理没问题", "接受度很高"], 1),
  question("Q30", "risk", "它偶尔抓咬、弄坏东西，或需要防逃跑措施，你会？", ["完全不能接受", "只能接受极少发生", "愿意预防和引导", "能持续做好管理"], 1),
  question("Q31", "risk", "如果它生病、变老，需要比现在更多照顾，你准备好了吗？", ["目前承担不了", "还需要准备", "愿意承担并做安排", "已经有具体安排"], 1),
];

if (questions.length !== 37 || questions.reduce((sum, q) => sum + q.weight, 0) !== 100) throw new Error("Question bank is incomplete");

const baseReq = { Q1:1,Q3:1,Q6:1,Q7:1,Q8:0,Q11:1,Q17:1,Q18:1,Q19:1,Q20:2,Q21:1,Q22:1,Q23:1,Q24:1,Q25:1,Q26:1,Q27:0,Q28:0,Q29:1,Q30:1,Q31:2 };
const profile = (id, name, kind, image, description, need, max, target, scene, note, children = .7) => ({ id, name, kind, image, description, need: { ...baseReq, ...need }, max: { Q2:2,Q4:2,Q5:1, ...max }, target: { Q12:1,Q13:1,Q14:1,Q16:1, ...target }, scene, note, children });
const pets = [
  profile("cat", "成年短毛家猫", "猫", "cat.svg", "适合希望有陪伴，也愿意给彼此留一点空间的生活。优先认识性格稳定的成年个体。", {Q19:2,Q21:2,Q22:2,Q23:2,Q27:2,Q29:2,Q30:2}, {}, {Q12:2,Q13:2}, 1, "确认具体个体的性格、健康状况，以及家中防护。"),
  profile("dog", "迷你贵宾犬", "狗", "dog.svg", "适合喜欢频繁互动，也能稳定安排活动、训练和日常照护的人。", {Q1:3,Q3:3,Q6:2,Q7:2,Q8:2,Q17:2,Q18:2,Q19:2,Q20:3,Q22:3,Q23:2,Q24:2,Q25:2,Q26:2,Q27:1,Q28:2,Q29:2,Q30:2}, {Q2:1,Q4:1}, {Q12:3,Q13:3,Q14:3,Q16:3}, 2, "先安排每天的活动、独处时段与毛发护理。", .6),
  profile("hamster", "金丝熊", "小型哺乳动物", "hamster.svg", "适合享受观察小动物、能准备稳定生活环境的人。它有自己的活动节奏。", {Q24:2,Q25:2,Q28:1}, {Q2:3}, {Q12:1,Q13:1,Q14:0,Q16:0}, 0, "确认独立饲养空间、夜间活动声和小动物就医渠道。", .5),
  profile("guinea", "豚鼠", "小型哺乳动物", "guinea.svg", "适合愿意照顾小动物日常起居，喜欢温和互动的人。", {Q1:2,Q6:2,Q7:2,Q17:2,Q19:2,Q22:2,Q23:2,Q24:2,Q25:2,Q26:2,Q27:1,Q28:1,Q29:2}, {}, {Q12:2,Q13:2}, 1, "了解社交、饮食和活动空间需求，并确认专业就医渠道。", .6),
  profile("rabbit", "宠物兔", "小型哺乳动物", "rabbit.svg", "适合愿意提供活动空间、耐心相处，并长期维护环境的人。", {Q1:2,Q3:2,Q6:2,Q7:2,Q17:2,Q19:2,Q21:2,Q22:2,Q23:2,Q24:2,Q25:2,Q26:2,Q27:2,Q29:2,Q30:2}, {}, {Q12:2,Q13:1}, 1, "提前做好活动区域防护，并尊重具体个体的接触习惯。", .6),
  profile("bird", "玄凤鹦鹉", "鸟类", "bird.svg", "适合乐于陪伴、互动和学习照护知识，也能接受鸣叫的人。", {Q1:2,Q3:2,Q6:2,Q7:2,Q8:2,Q17:2,Q18:2,Q19:2,Q22:2,Q23:2,Q24:2,Q25:2,Q26:2,Q27:2,Q28:3,Q29:2,Q30:2}, {Q2:1}, {Q12:3,Q13:1,Q14:2,Q16:3}, 3, "确认鸣叫、羽粉和每天的陪伴时间都能长期接受。", .5),
  profile("gecko", "豹纹守宫", "爬行类", "gecko.svg", "适合偏爱安静观察，并愿意认真维护设备和环境的人。", {Q3:0,Q11:3,Q21:3,Q22:2,Q23:2,Q24:3,Q25:3,Q26:3,Q27:0,Q29:1}, {}, {Q12:0,Q13:0,Q14:0,Q16:0}, 0, "先确认温控、食物来源和能接诊的兽医。", .5),
  profile("fish", "斗鱼", "水族", "fish.svg", "适合喜欢安静观察，愿意稳定维护水族环境的人。", {Q3:0,Q11:2,Q21:3,Q24:1,Q25:2,Q26:2,Q27:0,Q29:1,Q30:0}, {}, {Q12:0,Q13:0,Q14:0,Q16:0}, 0, "先规划水族设备、水质维护和照护安排。", .8),
];

const sectionQuestions = [questions.slice(0,6),questions.slice(6,12),questions.slice(12,17),questions.slice(17,22),questions.slice(22,27),questions.slice(27,32),questions.slice(32,37)];
const dimensions = [
  { id:"life", name:"生活节奏", max:25 }, { id:"home", name:"居住环境", max:20 },
  { id:"bond", name:"互动期待", max:20 }, { id:"self", name:"相处方式", max:15 },
  { id:"care", name:"照护准备", max:15 }, { id:"risk", name:"风险接受", max:5 },
];
const stageCopy = [
  { headline:"先聊聊生活", text:"从住处和家人开始，找到真正能安心相处的范围。" },
  { headline:"日子会告诉我们答案", text:"稳定的陪伴时间，是给小伙伴最好的见面礼。" },
  { headline:"给彼此留一个位置", text:"好相处，也需要一个舒服、安全的家。" },
  { headline:"你喜欢怎样的陪伴？", text:"有些伙伴爱热闹，有些更享受安静的同处。" },
  { headline:"慢慢相处，才会合拍", text:"我们看看你和它遇到小状况时的节奏。" },
  { headline:"照顾，是一件长期的小事", text:"准备得越具体，未来的日子越从容。" },
  { headline:"再看看真实生活的一面", text:"毛毛、声音和意外，都值得提前想一想。" },
];

const app = document.querySelector("#app");
const saved = (() => { try { return JSON.parse(localStorage.getItem("pet-match-v1")) || {}; } catch { return {}; } })();
let answers = saved.answers && typeof saved.answers === "object" ? saved.answers : {};
let stage = Number.isInteger(saved.stage) && saved.stage >= 0 && saved.stage < 7 ? saved.stage : 0;
let resultVisible = Boolean(saved.resultVisible);
let selectedPet = null;
let errorText = "";

const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
const persist = () => localStorage.setItem("pet-match-v1", JSON.stringify({ answers, stage, resultVisible }));
const picked = q => q.multi ? Array.isArray(answers[q.id]) && answers[q.id].length > 0 : answers[q.id] !== undefined;
const totalPicked = () => questions.filter(picked).length;
const optionValue = (q, i) => String(i);

function renderQuestion(q) {
  const current = q.multi ? (Array.isArray(answers[q.id]) ? answers[q.id] : []) : answers[q.id];
  const options = [...q.options, ...(q.id.startsWith("Q") ? ["暂不确定"] : [])];
  return `<section class="question" data-question="${q.id}"><div class="question-head"><span class="question-number">${q.id}</span><h3>${escapeHtml(q.text)}</h3><span class="question-points">${q.weight ? `${q.weight} 分` : "不计分"}</span></div><div class="options">${options.map((label,i) => {
    const value = i === q.options.length ? "unknown" : optionValue(q,i);
    const checked = q.multi ? current.includes(value) : current === value;
    return `<label class="option${checked ? " selected" : ""}"><input type="${q.multi ? "checkbox" : "radio"}" name="${q.id}" value="${value}" ${checked ? "checked" : ""} /><span class="option-text">${escapeHtml(label)}</span></label>`;
  }).join("")}</div>${q.id === "G6" ? `<input class="option-other" id="otherPreference" type="text" maxlength="60" placeholder="想到了别的宠物？写在这里" value="${escapeHtml(answers.G6other || "")}" ${current.includes("7") ? "" : "hidden"} />` : ""}</section>`;
}

function renderQuiz() {
  const s = sections[stage];
  const copy = stageCopy[stage];
  const percent = Math.round(totalPicked() / questions.length * 100);
  app.innerHTML = `<div class="quiz-layout"><aside class="story-panel"><div class="story-copy"><span class="eyebrow">宠物匹配测评</span><h1>${copy.headline}</h1><p>${copy.text}</p></div><div class="portrait-scene"><img src="./assets/cat.svg" alt="猫咪贴图" /><img src="./assets/dog.svg" alt="小狗贴图" /><img src="./assets/bird.svg" alt="小鸟贴图" /></div><div class="story-bottom"><strong>认真想一想，一起住的日子</strong>每一份照顾，都从了解彼此开始。</div></aside><div class="quiz-panel"><div class="panel-inner"><div class="progress-top"><span>${s.label}</span><span>已完成 ${totalPicked()} / 37</span></div><div class="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}" aria-label="答题进度"><div class="progress-fill" style="width:${percent}%"></div></div><h2 class="step-title">${s.title}</h2><p class="step-subtitle">${s.subtitle}</p>${errorText ? `<div class="validation" role="alert">${escapeHtml(errorText)}</div>` : ""}<div class="question-list">${sectionQuestions[stage].map(renderQuestion).join("")}</div><div class="quiz-actions"><div class="action-left">按你能长期做到的情况回答就好</div><div class="actions">${stage ? `<button type="button" class="button secondary" data-action="back">上一步</button>` : ""}<button type="button" class="button primary" data-action="next">${stage === 6 ? "查看我的匹配结果" : "下一步"}</button></div></div></div></div></div>`;
}

function updateProgress() {
  const count = totalPicked();
  const label = document.querySelector(".progress-top span:last-child");
  const bar = document.querySelector(".progress-fill");
  if (label) label.textContent = `已完成 ${count} / 37`;
  if (bar) { bar.style.width = `${Math.round(count / 37 * 100)}%`; bar.parentElement.setAttribute("aria-valuenow", String(Math.round(count / 37 * 100))); }
  document.querySelector(".validation")?.remove();
  errorText = "";
}

function handleAnswer(input) {
  const q = questions.find(item => item.id === input.name);
  if (!q) return;
  if (q.multi) {
    let next = Array.isArray(answers[q.id]) ? [...answers[q.id]] : [];
    if (input.checked) {
      if (input.value === "unknown" || (q.id === "G6" && input.value === "6") || (q.id === "Q10" && input.value === "0")) next = [input.value];
      else next = [...next.filter(value => value !== "unknown" && !(q.id === "G6" && value === "6") && !(q.id === "Q10" && value === "0")), input.value];
    } else next = next.filter(value => value !== input.value);
    answers[q.id] = [...new Set(next)];
    const group = input.closest(".question");
    group.querySelectorAll("input[name]").forEach(el => { el.checked = next.includes(el.value); el.closest(".option").classList.toggle("selected", el.checked); });
    if (q.id === "G6") document.querySelector("#otherPreference").hidden = !next.includes("7");
  } else {
    answers[q.id] = input.value;
    input.closest(".question").querySelectorAll(".option").forEach(label => label.classList.toggle("selected", label.querySelector("input").checked));
  }
  persist();
  updateProgress();
}

const capacityScore = (value, needed) => value >= needed ? 1 : value === needed - 1 ? .5 : 0;
const maxScore = (value, limit) => value <= limit ? 1 : value === limit + 1 ? .5 : 0;
const targetScore = (value, target) => Math.max(0, 1 - Math.abs(value - target) * .35);
function scoreItem(q, pet) {
  const answer = answers[q.id];
  if (answer === undefined || answer === "unknown" || (Array.isArray(answer) && answer.includes("unknown"))) return null;
  if (q.id === "Q9") return answer.includes("0") && answer.length === 1 ? 1 : answer.includes("1") ? pet.children : .8;
  if (q.id === "Q10") return answer.includes("0") ? 1 : .55;
  const n = Number(answer);
  if (q.id === "Q15") return n === pet.scene ? 1 : ((n === 0 && pet.scene === 1) || (n === 1 && pet.scene === 0) || (n === 2 && pet.scene === 3) || (n === 3 && pet.scene === 2)) ? .55 : .2;
  if (q.id === "Q6") return capacityScore(3 - n, pet.need.Q6);
  if (q.id in pet.need) return capacityScore(n, pet.need[q.id]);
  if (q.id in pet.max) return maxScore(n, pet.max[q.id]);
  if (q.id in pet.target) return targetScore(n, pet.target[q.id]);
  return null;
}

const criticalLabels = { Q1:"每天可投入的照护时间", Q3:"每日活动时间", Q7:"安全活动空间", Q11:"环境与设备维护", Q22:"稳定的日常预算", Q23:"突发医疗准备", Q24:"合适的就医渠道", Q27:"毛发或羽粉", Q28:"声音", Q29:"清洁与气味", Q30:"抓咬与物品防护", Q31:"长期照护" };
function evaluate(pet) {
  const breakdown = Object.fromEntries(dimensions.map(d => [d.id, { score:0, answered:0, max:d.max }]));
  const gaps = [];
  let total = 0, answeredWeight = 0;
  for (const q of questions.filter(item => item.weight)) {
    const factor = scoreItem(q, pet);
    if (factor === null) continue;
    const value = q.weight * factor;
    total += value;
    answeredWeight += q.weight;
    breakdown[q.section].score += value;
    breakdown[q.section].answered += q.weight;
    if (factor < .5 && criticalLabels[q.id]) gaps.push(criticalLabels[q.id]);
  }
  const hard = [];
  for (const id of ["Q1","Q3","Q7","Q11","Q22","Q23","Q24"]) {
    if (answers[id] !== undefined && answers[id] !== "unknown" && Number(answers[id]) <= pet.need[id] - 2) hard.push(criticalLabels[id]);
  }
  for (const id of ["Q27","Q28","Q29","Q30"]) {
    if (answers[id] === "0" && pet.need[id] >= 2) hard.push(criticalLabels[id]);
  }
  if (answers.Q31 === "0") hard.push(criticalLabels.Q31);
  const score = answeredWeight ? Math.round(total / answeredWeight * 100) : 0;
  return { pet, score, breakdown, hard:[...new Set(hard)], gaps:[...new Set(gaps)], answeredWeight, eligible:hard.length === 0 };
}

function gateIssues() {
  const issues = [];
  if (answers.G1 === "2") issues.push("目前住所明确不允许养宠");
  if (answers.G2 === "3") issues.push("共同居住的人明确反对");
  if (answers.G3 === "2") issues.push("家中存在严重过敏或健康限制，需先明确安全范围");
  if (answers.G5 === "3") issues.push("目前没有能承担长期照护的人");
  return issues;
}
function pendingIssues() {
  const issues = [];
  if (answers.G1 === "1" || answers.G1 === "3" || answers.G1 === "unknown") issues.push("确认住所允许饲养的品类和条件");
  if (answers.G2 === "2" || answers.G2 === "unknown") issues.push("和共同居住的人达成安排");
  if (answers.G3 === "1" || answers.G3 === "3" || answers.G3 === "unknown") issues.push("明确家人的健康与过敏限制");
  if (answers.G4 !== "0") issues.push("核实当地规定和合规来源");
  if (answers.G5 === "1" || answers.G5 === "2" || answers.G5 === "unknown") issues.push("安排外出或搬家时的备用照护人");
  if (questions.filter(q => q.weight && answers[q.id] === "unknown").length > 0) issues.push("补充暂不确定的题目，提高结果可信度");
  return [...new Set(issues)];
}
function preferred(pet) {
  const answer = answers.G6;
  if (!Array.isArray(answer)) return false;
  return (pet.kind === "猫" && answer.includes("0")) || (pet.kind === "狗" && answer.includes("1")) || (pet.kind === "鸟类" && answer.includes("2")) || (pet.kind === "小型哺乳动物" && answer.includes("3")) || (pet.kind === "爬行类" && answer.includes("4")) || (pet.kind === "水族" && answer.includes("5"));
}
function tier(score, coverage) { if (coverage < 85) return "初步匹配"; return score >= 85 ? "高度匹配" : score >= 75 ? "较为匹配" : score >= 65 ? "有条件匹配" : "值得了解"; }
function allResults() {
  return pets.map(evaluate).sort((a,b) => (b.score + (preferred(b.pet) ? 3 : 0)) - (a.score + (preferred(a.pet) ? 3 : 0)));
}
function renderDetails(item) {
  const dims = dimensions.map(d => ({ ...d, ...item.breakdown[d.id], ratio:item.breakdown[d.id].answered ? item.breakdown[d.id].score / item.breakdown[d.id].answered : 0 })).sort((a,b) => b.ratio - a.ratio);
  return `<div class="detail-panel" id="detailPanel"><div><span class="eyebrow">关于 ${item.pet.name}</span><h3>适合之处与准备事项</h3><p>你的「${dims[0].name}」和「${dims[1].name}」比较契合。${item.pet.description}</p><ul><li>${item.pet.note}</li>${item.gaps.length ? `<li>需要再想想：${item.gaps.slice(0,2).join("、")}。</li>` : ""}<li>建议了解具体个体的健康状况与相处习惯。</li></ul></div><div><h3>六个维度的匹配</h3><div class="breakdown">${dimensions.map(d => { const v = item.breakdown[d.id]; return `<div class="breakdown-row"><span>${d.name}</span><div class="mini-track"><span style="width:${v.answered ? Math.round(v.score / v.answered * 100) : 0}%"></span></div><strong>${v.answered ? `${Math.round(v.score)}/${v.answered}` : "待答"}</strong></div>`; }).join("")}</div></div></div>`;
}
function renderResults() {
  const blocked = gateIssues();
  const pending = pendingIssues();
  const results = allResults();
  const eligible = results.filter(item => item.eligible);
  const ready = eligible.filter(item => item.score >= 65 && item.answeredWeight >= 70);
  const primary = ready.slice(0,3);
  const backup = eligible.filter(item => !primary.includes(item)).slice(0,2);
  const chosen = selectedPet ? results.find(item => item.pet.id === selectedPet) : primary[0];
  app.innerHTML = `<div class="result-page"><div class="result-header"><div class="result-wrap result-headline"><div><span class="eyebrow">你的寻伴结果</span><h1>${blocked.length ? "先给未来的相遇留个位置" : primary.length ? "这些小伙伴，和你比较合拍" : "再准备一点，会遇见更合拍的伙伴"}</h1><p>${blocked.length ? "现在有几件需要优先解决的事。等条件明确，再来看看适合谁走进你的生活。" : primary.length ? `从37道回答里，我们找到了目前较合适的方向。${pending.length ? "还有几件事值得在决定前确认。" : "先认识具体个体，再做最后决定。"}` : "目前还没有达到推荐条件的宠物。看看差距在哪里，准备好后可以重新测一次。"}</p></div><div class="result-portraits"><img src="./assets/cat.svg" alt="猫咪" /><img src="./assets/dog.svg" alt="小狗" /><img src="./assets/bird.svg" alt="小鸟" /></div></div></div><div class="result-body">${blocked.length ? `<div class="empty-state"><h2>先处理这几件事</h2><ul>${blocked.map(x => `<li>${x}</li>`).join("")}</ul><p>这些条件会直接影响宠物的生活与照护，所以暂时不生成推荐榜单。</p></div>` : `${pending.length ? `<div class="result-alert"><strong>决定前再确认</strong>${pending.slice(0,3).join("；")}。</div>` : ""}${primary.length ? `<h2 class="section-heading">你的优先了解清单</h2><div class="recommend-grid">${primary.map((item,i) => `<article class="recommend-card${i === 0 ? " primary-card" : ""}"><div class="card-top"><img src="./assets/${item.pet.image}" alt="${item.pet.name}画像" /><span class="score-pill">${item.score} 分 · ${tier(item.score, item.answeredWeight)}</span></div><h3>${item.pet.name}</h3><span class="animal-kind">${item.pet.kind}${preferred(item.pet) ? " · 你偏爱的品类" : ""}</span><p>${item.pet.description}</p><div class="card-reason"><strong>先留意</strong>${item.pet.note}</div><div class="card-actions"><button class="text-button" type="button" data-pet="${item.pet.id}">查看匹配详情</button></div></article>`).join("")}</div>${chosen && primary.some(x => x.pet.id === chosen.pet.id) ? renderDetails(chosen) : renderDetails(primary[0])}` : `<div class="empty-state"><h2>目前暂无稳妥推荐</h2><p>${results[0]?.answeredWeight < 70 ? "暂不确定的答案较多，请返回补充几个关键条件。" : "你可以先从时间、空间、预算或就医准备中选择一项调整，再重新比较。"}${results[0]?.hard.length ? `最接近的候选仍需解决：${results[0].hard.slice(0,2).join("、")}。` : ""}</p></div>`}${backup.length && primary.length ? `<div class="secondary-results"><h2 class="section-heading">还可以了解</h2><div class="backup-list">${backup.map(x => `<span class="backup"><strong>${x.pet.name}</strong> · ${x.score}分${x.score < 65 ? " · 需调整条件" : ""}</span>`).join("")}</div></div>` : ""}`}<div class="result-footer"><button class="button secondary" type="button" data-action="edit">返回修改答案</button><button class="button primary" type="button" data-action="restart">重新测一次</button></div></div></div>`;
}

app.addEventListener("change", e => { if (e.target.matches("input[name]")) handleAnswer(e.target); });
app.addEventListener("input", e => { if (e.target.id === "otherPreference") { answers.G6other = e.target.value; persist(); } });
app.addEventListener("click", e => {
  const petButton = e.target.closest("[data-pet]");
  if (petButton) { selectedPet = petButton.dataset.pet; const item = allResults().find(x => x.pet.id === selectedPet); const panel = document.querySelector("#detailPanel"); if (panel && item) panel.outerHTML = renderDetails(item); document.querySelector("#detailPanel")?.scrollIntoView({ behavior:"smooth", block:"nearest" }); return; }
  const action = e.target.closest("[data-action]")?.dataset.action;
  if (!action) return;
  if (action === "back") { stage--; errorText = ""; renderQuiz(); window.scrollTo(0,0); persist(); }
  if (action === "next") {
    const missing = sectionQuestions[stage].find(q => !picked(q));
    if (missing) { errorText = `还有 ${missing.id} 没有选择。拿不准也可以选“暂不确定”。`; renderQuiz(); document.querySelector(`[data-question="${missing.id}"]`)?.scrollIntoView({ behavior:"smooth", block:"center" }); return; }
    if (stage === 6) { resultVisible = true; selectedPet = null; renderResults(); }
    else { stage++; errorText = ""; renderQuiz(); }
    window.scrollTo(0,0); persist();
  }
  if (action === "edit") { resultVisible = false; renderQuiz(); window.scrollTo(0,0); persist(); }
  if (action === "restart") reset();
});

function reset() { answers = {}; stage = 0; resultVisible = false; selectedPet = null; errorText = ""; persist(); renderQuiz(); window.scrollTo(0,0); }
document.querySelector("#resetTop").addEventListener("click", reset);
document.querySelector("#homeLink").addEventListener("click", e => { e.preventDefault(); resultVisible = false; renderQuiz(); window.scrollTo(0,0); persist(); });
if (resultVisible && totalPicked() === 37) renderResults(); else renderQuiz();
