import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Daftar.css";

const Daftar = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasiPasword, setKonfirmasiPasword] = useState("");
  const [namaDepan, setNamaDepan] = useState("");
  const [namaBelakang, setNamaBelakang] = useState("");

  const daftarHandler = async (e) => {
    e.preventDefault();
    if(password!==konfirmasiPasword){
      alert('Passwords do not match.')
    }
    try {
      await axios.post("http://localhost:5000/users", {
        email,
        password,
        namaDepan,
        namaBelakang,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <form className="formDaftar">
        <h1 className="title">Daftar</h1>
        <hr className="hrTop" />
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="inputDaftar"
          type="text"
          placeholder="Email / Username"
        />
        <span className="inputNama">
          <input 
          onChange={(e) => setNamaDepan(e.target.value)}
          className="inputDaftar" 
          type="text" 
          placeholder="Nama depan" />
          <input
          onChange={(e) => setNamaBelakang(e.target.value)}
            className="inputDaftar"
            type="text"
            placeholder="Nama Belakang"
          />
        </span>
        <input 
        onChange={(e) => setPassword(e.target.value)}
        className="inputDaftar" 
        type="password" 
        placeholder="Password" 
        autoComplete="off"
        />
        <input
        onChange={(e) => setKonfirmasiPasword(e.target.value)}
          className="inputDaftar"
          type="password"
          placeholder="Konfirmasi Password"
          autoComplete="off"
        />
        <hr className="hrBot" />
        <button onClick={daftarHandler} className="buttonDaftar">
          Daftar
        </button>
      </form>
    </div>
  );
};

export default Daftar;
