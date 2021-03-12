import React from "react";
import {motion} from "framer-motion"

const DashFinalList = () => {
    return(
        <div className="final-list">
            <motion.div initial={{y: 40 }} animate={{y: 0}} transition={{ duration: 0.5, type: "tween" }} className = "final-box" style={{background:"#F6CF51"}}>Proposed Project XYZ</motion.div>
            <motion.div initial={{y: 40 }} animate={{y: 0}} transition={{ duration: 0.6, type: "tween" }}className = "final-box" style={{background:"#7B66FF"}}>Proposed Project ABC</motion.div>
            <motion.div initial={{y: 40 }} animate={{y: 0}} transition={{ duration: 0.7, type: "tween" }} className = "final-box" style={{background:"#19CA7A"}}>Proposed Project KLM</motion.div>
            <motion.div initial={{y: 40 }} animate={{y: 0}} transition={{ duration: 0.8, type: "tween" }} className = "final-box" style={{background:"#FF9566"}}>Proposed Project MNO</motion.div>
            <motion.div initial={{y: 40 }} animate={{y: 0}} transition={{ duration: 0.9, type: "tween" }} className = "final-box" style={{background:"#FF4E00"}}>Proposed Project PQR</motion.div>
        </div>
    )
}

export default DashFinalList;