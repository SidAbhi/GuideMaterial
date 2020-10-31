import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { inlinePositioning, animateFill } from 'tippy.js';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';
import { useSpring, animated } from 'react-spring';
import 'intersection-observer';
import { useIntersectionObserver } from '@researchgate/react-intersection-observer';


//Text content
const OpenQuote = () => {
    const [inView, setInView] = useState(false);
    const [changeColor, set] = useSpring(() => ({config: {mass: 4, tension: 170, friction: 44}, to: {bg: '#F9A846'}}));
    const [changeOpacity, set2] = useSpring(() => ({config: {mass: 4, tension: 170, friction: 44}, delay: 500, from:{opacity: 0, transform: [-80, 0]}}));
    const viewChange = (entry) => {
        setInView(entry.isIntersecting ? false : true);
        inView ? set2 ({opacity: 1, transform: [0, 0]}) : set2 ({opacity: 0, transform: [80, 0]});
        inView ? set ({bg: '#F9A846'}) : set ({bg: '#192e42'});
        console.log(inView);
    };
    const [changeBold] = useIntersectionObserver(viewChange, {threshold: 0.5});

    return (
        <div ref = {changeBold}>
            <animated.p className = "quote" id="quoteSapa" style = {{opacity: changeOpacity.opacity, transform: changeOpacity.transform.to((x,y) => `translate(${x}px, ${y}px)`)}}> SAPA adalah alat ukur yang didasari oleh prinsip dan teori psikologi positif, dengan fokus pada kekuatan dan kepribadian seseorang. Tujuan utama menggunakan alat ini adalah sebagai sarana <animated.b style = {{ color: changeColor.bg }}>empowerment</animated.b> dan <animated.b style = {{ color: changeColor.bg }}>personal growth</animated.b>.</animated.p>
        </div>
        );
};

const LBTitle = () => {
    return (
        <h2 className = 'chapter-title'>INTRODUCTION</h2>
    );
};

const LatarBelakang = () => {

    return (
        <div className = "content-lb">
            <h2>Strengths</h2>
            <p>
                Landasan aspek kekuatan dalam SAPA adalah konsep <i>strengths</i> yang diteliti dan dikembangkan oleh&nbsp;
                <Tippy 
                plugins = { [inlinePositioning, animateFill] }
                animateFill = {true}
                inlinePositioning = {true}
                interactiveDebounce = {30}
                interactiveBorder = {30}
                interactive = {true}
                content = {<span>Peterson, C., & Seligman, M. E. (2004). <i>Character strengths and virtues: A handbook and classification</i> (Vol. 1). Oxford University Press.</span>}>
                    <cite>Peterson dan Seligman (2004)</cite>
                </Tippy>. Dalam bukunya, <i>Character Strengths and Virtues</i> (CSV), Peterson dan Seligman meneliti, menganalisa, dan mengklasifikasikan sifat positif/kekuatan manusia. Dalam usahanya, Peterson dan Seligman membangun salah satu dasar psikologi positif dengan berfokus pada aspek positif manusia melalui kekuatan dan kebaikannya.
            </p>
            <p>
                CSV tidak menentukan apa yang dianggap baik dalam manusia, melainkan hanya menggambarkan apa yang sudah ada di berbagai budaya, negara, dan kepercayaan. Sehingga CSV tidak menentukan apa yang harus dimiliki oleh manusia untuk memperbaiki atau mengembangkan dirinya, melainkan menjelaskan dan mengk<wbr/>lasifikasikan kekuatan dan kebaikan yang ada di manusia.
            </p>
            <p>
                SAPA berusaha mengklasifikasikan ulang kekuatan-kekuatan yang sudah dijelaskan dengan menambahkan dan mengubah apa yang sudah dijelaskan dalam CSV, VIA-IS, dan Clifton Strengthsfinder&nbsp;
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
                </Tippy>. Kemudian mengintegrasikannya dengan konsep dan teori kepribadian.
            </p>
            <h2>Personality</h2>
            <p>
                Kepribadian adalah salah satu topik yang paling banyak dikaji dan diteliti dalam bidang psikologi. Banyak teori dan model yang muncul dan berkembang, tetapi dalam teori kepribadian modern salah satu kerangka dan model yang digunakan dan sudah paling banyak diteliti adalah teori Big Five yang dikembangkan oleh&nbsp; 
                <Tippy 
                plugins = { [inlinePositioning, animateFill] }
                animateFill = {true}
                inlinePositioning = {true}
                interactiveDebounce = {30}
                interactiveBorder = {30}
                interactive = {true}
                content = {<span>Costa, P. T., & McCrae, R. R. (1992). Normal personality assessment in clinical practice: The NEO Personality Inventory. <i>Psychological assessment</i>, 4(1), 5.</span>}>
                    <cite>Costa dan McCrae (1992)</cite>
                </Tippy>. Model kepribadian ini adalah model kepribadian yang paling banyak digunakan untuk menggambarkan bagaimana seseorang berinteraksi dengan dunianya.
            </p>
            <p>
                Dalam model ini kepribadian dibagi menjadi lima dimensi besar (Big Five) yang terdiri dari:</p>
                <ul className = "txt-list">
                    <li><b>Openness</b> : dimensi kepribadian yang menggambarkan keterbukaan seseorang secara emosional, menerima pengalaman baru, ide baru, keingintahuan, dan kesenian.</li>
                    <li><b>Conscientiousness</b> : dimensi kepribadian yang berkaitan dengan kedisiplinan, kepatuhan, tugas, dan pekerjaan.</li>
                    <li><b>Extraversion</b> : dimensi kepribadian yang mengukur keaktifan, keasertifan, banyak energi, dan senang banyak bersosialisasi.</li>
                    <li><b>Agreeable</b> : dimensi kepribadian yang menggambarkan aspek seperti kesopanan, kebaikan, keramahan, dan aspek prososial lainnya. </li>
                    <li><b>Neuroticism</b> : dimensi kepribadian yang menunjukkan kerentanan terhadap kecemasan, depresi, stress, dan emosi negatif lainnya.</li>
                </ul>
            <h2>Positive Psychology</h2>
            <p>
                Bidang psikologi setelah Perang Dunia II berfokus pada menyembuhkan dan pada gangguan-gangguan. Fokus pada penyakit dan gangguan ini menyebabkan bidang psikologi meninggalkan aspek seperti membangun individu dan komunitas yang lebih positif dan terpenuhi secara mental, dan juga tidak mempertimbangkan kemungkinan bahwa membangun kekuatan dan potensi dapat menjadi cara menyembuhkan yang baik. Tujuan psikologi positif adalah untuk mengubah fokus psikologi agar tidak hanya sibuk berusaha memperbaiki hal terburuk di hidup manusia, tapi juga membangun hal-hal yang baik dalam kehidupan&nbsp;
                <Tippy 
                plugins = { [inlinePositioning, animateFill] }
                animateFill = {true}
                inlinePositioning = {true}
                interactiveDebounce = {30}
                interactiveBorder = {30}
                interactive = {true}
                content = {<span>Lopez, S. J., & Snyder, C. R. (Eds.). (2009). <i>The Oxford handbook of positive psychology</i>. Oxford University Press.</span>}>
                    <cite>(Lopez & Snyder, 2009)</cite> 
                </Tippy>.
            </p>
            <p>
                Sehingga psikologi positif mengatakan bahwa psikologi bukanlah ilmu yang hanya mempelajari penyakit, kelemahan, dan luka manusia; tapi juga ilmu yang bisa mempelajari kekuatan dan kebaikan manusia. Filsafat inilah yang membangun dasar SAPA dan bagaimana SAPA dapat membangun dan mengarahkan individu dan kelompok untuk memenuhi kekuatan dan potensinya agar terbentuk manusia dengan <i>well-being</i> yang baik. 
            </p>
        </div>
        );
};

const SecondQuote = () => {
    return (
        <div className = "second-quote">
            <h2 className = "title-sq">Kenapa kita harus peduli dengan well-being?</h2>
            <p className = "content-sq">Individu yang menjalani hidup, bekerja dan belajar sesuai dengan kekuatan dan kebutuhannya akan memiliki hidup yang lebih bahagia, bermakna, dan produktif. Secara sosial, orang dengan well-being yang tinggi dapat membangun dan mempertahankan hubungan yang lebih baik, lebih mudah bekerja sama, lebih suka membantu orang lain. Dalam pekerjaan mereka lebih produktif, lebih mudah menangani masalah, dan bisa lebih baik bekerja tanpa perlu diawasi. Secara kesehatan pun, orang dengan well-being yang baik memiliki daya tahan tubuh yang lebih baik, dan lebih sedikit mengidap penyakit. Walaupun bisa dikatakan bahwa kondisi-kondisi tersebut yang membentuk well-being yang baik, penelitian menunjukkan bahwa well-being dan kondisi-kondisi sebelumnya saling mempengaruhi dan memberikan efek timbal balik.</p>
        </div>
    );
};

const SapaQuote = () => {
    const [inView, setInView] = useState(false);
    const [changeColor, set] = useSpring(() => ({config: {mass: 4, tension: 170, friction: 44}, to: {color: '#F9A846'}}));
    const [props, set2] = useSpring(() => ({config: {mass: 4, tension: 170, friction: 44}, from:{opacity: 0, transform: [-80, 0]}}));
    const viewChange = (entry) => {
        setInView(entry.isIntersecting ? false : true);
        inView ? set2 ({opacity: 1, transform: [0, 0]}) : set2 ({opacity: 0, transform: [-80, 0]});
        inView ? set ({bg: '#F9A846'}) : set ({bg: '#192e42'});
        console.log(inView);
    };
    const [quoteChange] = useIntersectionObserver(viewChange, {threshold: 0.3});

    return (
        <div ref = {quoteChange}>
            <animated.p className = "quote quote-sapa" style = {{opacity: props.opacity, transform: props.transform.to((x,y) => `translate(${x}px, ${y}px)`)}}>
                Setiap orang memiliki kekuatan dan kelemahannya masing-masing, tetapi seringkali kelemahanlah yang difokuskan. Penelitian dalam psikologi positif menunjukkan bahwa orang akan lebih bahagia dan produktif ketika menguatkan kekuatannya, dan belajar menyiasati kelemahannya.
            </animated.p>
        </div>
    )
};

const Results = () => {
    return (
        <div className = "content-lb">
            <h2>Focusing on the strengths</h2>
            <p>Sebelum mempelajari bagaimana cara membaca alat ukur SAPA, perlu ditekankan lagi bahwa setiap orang memiliki kekuatannya masing-masing. Dengan berfokus pada kekuatan seseorang, kita bisa membantu mereka menerapkan potensinya secara optimal, mencegah menempatkannya pada pekerjaan dan tugas yang tidak sesuai, dan mendorongnya menjadi lebih bahagia dan produktif. Dengan mereview kekuatan seseorang </p>
            <p>Mungkin sebagian dari anda ada yang bertanya, "Bukankah semua orang sudah mengetahui apa kekuatannya?" Tetapi penelitian menunjukkan bahwa sekitar 70% orang tidak mengetahui apa kekuatan dan kelebihannya. Di Indonesia sendiri sebagian besar mahasiswa memilih jurusan yang salah, dan banyak orang yang bekerja tidak sesuai dengan dirinya.</p>
            <p>Untuk melihat apa kekuatannya, pada bagian Strengths kita dapat melihat 5 kekuatan teratasnya dan mendapatkan gambaran yang cukup akurat mengenai kekuatan utama seeseorang.</p>
            <h2>Learning from the weaknesses</h2>
            <p>Walaupun kita harus berfokus melihat kekuatan seseorang, tentu saja bukan berarti kita tidak melihat kelemahannya. Penelitian menunjukkan bahwa manusia cenderung lebih mengingat dan dipengaruhi oleh hal-hal yang negatif. Dimana masalah dan pengalaman buruk akan selalu mempengaruhi diri seseorang. Sehingga kita tidak bisa mengabaikan kelemahan juga; dimana jika aspek negatifnya tidak diperhatikan maka kekuatannya pun akan terhambat.</p>
            <p>Lalu bagaimana kita menyiasati kelemahannya? Kita perlu kemabli lagi ke kekuatan seseorang, karena tiap orang akan punya cara yang optimal untuk menyiasatinya berdasarkan kekuatannya. Tidak ada satu solusi yang cocok untuk semua orang.</p>
            <p>Agar lebih jelas, kita bisa bayangkan suatu kasus dimana ada seseorang yang bekerja dalam bagian sosial media dengan nilai kekuatan&nbsp; 
                <Tippy 
                plugins = { [inlinePositioning, animateFill] }
                animateFill = {true}
                inlinePositioning = {true}
                interactiveDebounce = {30}
                interactiveBorder = {30}
                interactive = {true}
                content = {
                    <div>
                        <li>Pintar berbicara</li>
                        <li>Pintar merangkai kata-kata</li>
                        <li>Baik dalam berkomunikasi</li>
                    </div>
                }>
                    <cite>Articulate</cite> 
                </Tippy> 
                &nbsp;yang rendah. Tentunya jika kita berfokus pada kelemahannya, kemampuan komunikasi yang rendah ini bisa menjadi hambatan dalam pekerjaannya. Tetapi jika kita melihat kekuatannya, kita bisa mencari cara menyiasati kelemahannya. Misalnya dalam kasus ini kekuatannya di antaranya adalah &nbsp; 
                <Tippy 
                plugins = { [inlinePositioning, animateFill] }
                animateFill = {true}
                inlinePositioning = {true}
                interactiveDebounce = {30}
                interactiveBorder = {30}
                interactive = {true}
                content = {
                    <div>
                        <li>Mampu melihat dan memilah langkah ke depan</li>
                        <li>Dapat melihat situasi dan masalah dengan lebih terstruktur</li>
                    </div>
                }>
                    <cite>Strategic</cite> 
                </Tippy> dan&nbsp;
                <Tippy 
                plugins = { [inlinePositioning, animateFill] }
                animateFill = {true}
                inlinePositioning = {true}
                interactiveDebounce = {30}
                interactiveBorder = {30}
                interactive = {true}
                content = {
                    <div>
                        <li>Pintar menimbangkan resiko</li>
                        <li>Hati-hati dalam bertindak</li>
                        <li>Mempertimbangkan banyak hal sebelum melangkah</li>
                    </div>
                }>
                    <cite>Careful</cite> 
                </Tippy> 
                . Dengan kekuatannya ini kita bisa menempatkan orang ini dalam bagian pengembangan strategi sosial media, tetapi tanpa perlu berinteraksi dan memanage langsung akun sosial medianya.</p>
        </div>
    )
};

export { LatarBelakang, OpenQuote, LBTitle, SecondQuote, Results, SapaQuote };