import React from 'react';
import { animated, useSpring } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

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
            <p>Landasan utama aspek kekuatan dalam SAPA adalah konsep <i>strengths</i> yang diteliti dan dikembangkan oleh&nbsp;
            <Tippy content={<span>Peterson, C., & Seligman, M. E. (2004). <i>Character strengths and virtues: A handbook and classification</i> (Vol. 1). Oxford University Press.</span>}>
                <cite>Peterson dan Seligman (2004)</cite>
            </Tippy>. Dalam bukunya, <i>Character Strengths and Virtues</i> (CSV), Peterson dan Seligman meneliti, menganalisa, dan mengklasifikasikan sifat positif/kekuatan manusia. Dalam usahanya, Peterson dan Seligman membangun salah satu dasar psikologi positif dengan berfokus pada aspek positif manusia melalui kekuatan dan kebaikannya. </p>
            <p>CSV tidak menentukan apa yang dianggap baik dalam manusia, melainkan hanya menggambarkan apa yang sudah ada di berbagai budaya, negara, dan kepercayaan. Sehingga CSV tidak menentukan apa yang harus dimiliki oleh manusia untuk memperbaiki atau mengembangkan dirinya, melainkan menjelaskan dan mengklasifikasikan kekuatan dan kebaikan yang ada di manusia.</p>
            <p>Dalam Guide yang kami berikan, kekuatan-kekuatan ini akan direview apa yang sudah diketahui secara ilmiah mengenai masing-masing kekuatan dalam beberapa aspek seperti: </p>
            <ul className = "txtList">
                <li>Definisi</li>
                <li>Korelasi dan konsekuensi kekuatan</li>
                <li>Pengembangan kekuatan</li>
                <li>Referensi</li>
            </ul>
            <h2>Personality</h2>
            
        </div>
        );
};

export { LatarBelakang, OpenQuote, LBTitle};