import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { inlinePositioning, animateFill } from 'tippy.js';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';


//Text content

/*
const OpenQuote = () => {
    //anim settings
    const [changeColor, set] = useSpring(() => ({config: {mass: 1, tension: 170, friction: 44}, to: {bg: '#F9A846'}}));
    //intersection observer 
    const {ref: changeBold, inView} = useInView({ threshold: 1});
    //sets new value and triggers the anim
    const quoteVis = () => {
        inView ? set ({bg: '#F9A846'}) : set ({bg: '#192e42'});
        return (changeColor.bg);
    };
    let i = 0

    return (
        <animated.p ref={changeBold} className = "quote" id="quoteSapa"> SAPA adalah alat ukur yang didasari oleh prinsip dan teori psikologi positif, dengan fokus pada kekuatan dan kepribadian seseorang. Tujuan utama diciptakan alat ini adalah <animated.b style = {{ color: quoteVis() }}>empowerment</animated.b> dan <animated.b style = {{ color: quoteVis() }}>personal growth</animated.b>.</animated.p>
        );
};
*/
const OpenQuote = () => {

    return (
        <p className = "quote" id="quoteSapa"> SAPA adalah alat ukur yang didasari oleh prinsip dan teori psikologi positif, dengan fokus pada kekuatan dan kepribadian seseorang. Tujuan utama diciptakan alat ini adalah <b>empowerment</b> dan <b>personal growth</b>.</p>
        );
};

const LBTitle = () => {
    return (
        <h2 className = 'chapterTitle'>LATAR BELAKANG</h2>
    );
};

const LatarBelakang = () => {

    return (
        <div className = "contentLB">
            <h2>Strengths</h2>
            <p>Landasan aspek kekuatan dalam SAPA adalah konsep <i>strengths</i> yang diteliti dan dikembangkan oleh&nbsp;
            <Tippy 
            plugins = { [inlinePositioning, animateFill] }
            animateFill = {true}
            inlinePositioning = {true}
            interactiveDebounce = {30}
            interactiveBorder = {30}
            interactive = {true}
            content = {<span>Peterson, C., & Seligman, M. E. (2004). <i>Character strengths and virtues: A handbook and classification</i> (Vol. 1). Oxford University Press.</span>}>
                <cite>Peterson dan Seligman (2004)</cite>
            </Tippy>. Dalam bukunya, <i>Character Strengths and Virtues</i> (CSV), Peterson dan Seligman meneliti, menganalisa, dan mengklasifikasikan sifat positif/kekuatan manusia. Dalam usahanya, Peterson dan Seligman membangun salah satu dasar psikologi positif dengan berfokus pada aspek positif manusia melalui kekuatan dan kebaikannya. </p>
            <p>CSV tidak menentukan apa yang dianggap baik dalam manusia, melainkan hanya menggambarkan apa yang sudah ada di berbagai budaya, negara, dan kepercayaan. Sehingga CSV tidak menentukan apa yang harus dimiliki oleh manusia untuk memperbaiki atau mengembangkan dirinya, melainkan menjelaskan dan mengk<wbr/>lasifikasikan kekuatan dan kebaikan yang ada di manusia.</p>
            <p>SAPA berusaha mengklasifikasikan ulang kekuatan-kekuatan yang sudah dijelaskan dengan menambahkan dan mengubah apa yang sudah dijelaskan dalam CSV, VIA-IS, dan Clifton Strengthsfinder&nbsp;
            <Tippy 
            plugins = { [inlinePositioning, animateFill] }
            animateFill = {true}
            inlinePositioning = {true}
            interactiveDebounce = {30}
            interactiveBorder = {30}
            interactive = {true}
            content = {<span>Peterson, C., & Seligman, M. E. (2006). The values in action (VIA) classification of strengths. <i>A life worth living: Contributions to positive psychology</i>, 29-48.</span>}>
                <cite>(Peterson & Seligman, 2006;&nbsp;</cite>
            </Tippy>
            <Tippy 
            plugins = { [inlinePositioning, animateFill] }
            animateFill = {true}
            inlinePositioning = {true}
            interactiveDebounce = {30}
            interactiveBorder = {30}
            interactive = {true}
            content = {<span>Asplund, J., Lopez, S. J., Hodges, T., & Harter, J. (2007). The Clifton StrengthsFinder 2.0 technical report: Development and validation. <i>The Gallup Organization, Princeton, NJ.</i></span>}>
                <cite>Asplund et al., 2007)</cite>
            </Tippy>. Kemudian mengintegrasikannya dengan konsep dan teori kepribadian.</p>
            <h2>Personality</h2>
            <p>Kepribadian adalah salah satu topik yang paling banyak dikaji dan diteliti dalam bidang psikologi. Banyak teori dan model yang muncul dan berkembang, tetapi dalam teori kepribadian modern salah satu kerangka dan model yang digunakan dan sudah paling banyak diteliti adalah teori Big Five yang dikembangkan oleh&nbsp; 
            <Tippy 
            plugins = { [inlinePositioning, animateFill] }
            animateFill = {true}
            inlinePositioning = {true}
            interactiveDebounce = {30}
            interactiveBorder = {30}
            interactive = {true}
            content = {<span>Costa, P. T., & McCrae, R. R. (1992). Normal personality assessment in clinical practice: The NEO Personality Inventory. <i>Psychological assessment</i>, 4(1), 5.</span>}>
                <cite>Costa dan McCrae (1992)</cite>
            </Tippy>. Model kepribadian ini adalah model kepribadian yang paling banyak digunakan untuk menggambarkan bagaimana seseorang berinteraksi dengan dunianya.</p>
            <p>Dalam model ini kepribadian dibagi menjadi lima dimensi besar (Big Five) yang terdiri dari:</p>
            <ul className = "txtList">
                <li><b>Openness</b> : dimensi kepribadian yang menggambarkan keterbukaan seseorang secara emosional, menerima pengalaman baru, ide baru, keingintahuan, dan kesenian.</li>
                <li><b>Conscientiousness</b> : dimensi kepribadian yang berkaitan dengan kedisiplinan, kepatuhan, tugas, dan pekerjaan.</li>
                <li><b>Extraversion</b> : dimensi kepribadian yang mengukur keaktifan, keasertifan, banyak energi, dan senang banyak bersosialisasi.</li>
                <li><b>Agreeable</b> : </li>
                <li><b>Neuroticism</b> : </li>
            </ul>
        </div>
        );
};

export { LatarBelakang, OpenQuote, LBTitle};