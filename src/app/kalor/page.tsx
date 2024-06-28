"use client"
import { useState } from 'react'
export default function Kalor() {
    const [result, setResult] = useState("")
    const HandlerCalculate = (e: any) => {
        e.preventDefault()
        const result = document.getElementById("result")
        const { massa, wi, wf, tf, tl, c } = e.target;
        const deltaT = Number(tl.value) - Number(tf.value)
        const Q2 = Number(massa.value)*Number(c.value)*deltaT
        const mw = Number(massa.value)*((Number(wi.value) - Number(wf.value))/100)
        console.log("mw", mw)
        const L= 2260
        const Q1 = mw*L
        const Qtotal = Q1+Q2
        setResult(String(Qtotal))
        console.log("Q1", Q1)
        console.log("Q2", Q2)
    }
    return (
        <form onSubmit={HandlerCalculate} className="grid justify-center">
            <h1 className="text-3xl font-bold">Kalor</h1>
            <div className="massa">
                <label htmlFor="">Massa Kopi (m)</label>
                <input className="border-2 border-secondary outline-none rounded-sm" type="text" id="massa" name="massa" />
            </div>

            <div className="wi">
                <label htmlFor="">Kandungan air awal (wi)</label>
                <input className="border-2 border-secondary outline-none rounded-sm" type="text" id="wi" name="wi" />
            </div>

            <div className="wf">
                <label htmlFor="">Kandungan air akhir (wf)</label>
                <input className="border-2 border-secondary outline-none rounded-sm" type="text" id="wf" name="wf" />
            </div>

            <div className="tf">
                <label htmlFor="">Suhu awal (tf)</label>
                <input className="border-2 border-secondary outline-none rounded-sm" type="text" id="tf" name="tf" />
            </div>

            <div className="tl">
                <label htmlFor="">Suhu akhir (tl)</label>
                <input className="border-2 border-secondary outline-none rounded-sm" type="text" id="tl" name="tl" />
            </div>

            <div className="c">
                <label htmlFor="">kalor jenis (c)</label>
                <input className="border-2 border-secondary outline-none rounded-sm" type="text" id="c" name="c" />
            </div>
            <button type="submit" className="py-1 bg-primary rounded-lg text-center text-white font-semibold w-1/3">Hitung</button>

            <p id="result">Q Total ={result}</p>
        </form>
    )
}