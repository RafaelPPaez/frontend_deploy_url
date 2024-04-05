import React, { useState } from "react";
import { FaRegTrashAlt, FaEdit, FaSave } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import "./contentAdm.css";

const ContentAdm = () => {
  const [tipoConteudo, setTipoConteudo] = useState("filmes");

  const [conteudo, setConteudo] = useState({
    filmes: [{ nome: "Filme 1", movieID: 123 }],
    series: [],
    livros: [],
    usuarios: [], // Nova categoria "Usuários"
  });

  const [novoItem, setNovoItem] = useState({ nome: "", id: "" });
  const [editandoItem, setEditandoItem] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoItem({ ...novoItem, [name]: value });
  };

  const adicionarItem = () => {
    setConteudo({
      ...conteudo,
      [tipoConteudo]: [...conteudo[tipoConteudo], novoItem],
    });
    setNovoItem({ nome: "", id: "" });
  };

  const removerItem = (index) => {
    setConteudo({
      ...conteudo,
      [tipoConteudo]: conteudo[tipoConteudo].filter((_, i) => i !== index),
    });
  };

  const salvarEdicao = (index) => {
    const novoConteudo = { ...conteudo };
    novoConteudo[tipoConteudo][index] = novoItem;
    setConteudo(novoConteudo);
    setEditandoItem(null);
    setNovoItem({ nome: "", id: "" });
  };

  const cancelarEdicao = () => {
    setEditandoItem(null);
    setNovoItem({ nome: "", id: "" });
  };

  const editarItem = (index) => {
    setNovoItem(conteudo[tipoConteudo][index]);
    setEditandoItem(index);
  };

  const renderizarTabela = () => {
    return (
      <table className="tabela-conteudo">
        <thead>
          <tr>
            <th>Nome</th>
            <th>ID</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {conteudo[tipoConteudo].map((item, index) => (
            <tr key={index}>
              <td>
                {editandoItem === index ? (
                  <input
                    type="text"
                    name="nome"
                    value={novoItem.nome}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.nome
                )}
              </td>
              <td>
                {editandoItem === index ? (
                  <input
                    type="text"
                    name="id"
                    value={novoItem.id}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.id
                )}
              </td>
              <td>
                {editandoItem === index ? (
                  <>
                    <button onClick={() => salvarEdicao(index)}>
                      <FaSave />
                    </button>
                    <button onClick={() => cancelarEdicao()}>Cancelar</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => removerItem(index)}>
                      <FaRegTrashAlt />
                    </button>
                    <button onClick={() => editarItem(index)}>
                      <FaEdit />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="content-container">
      <div className="categoria-container">
        <label htmlFor="categoria" style={{ color: "#fff854" }}>
          Categoria:
        </label>
        <select
          id="categoria"
          value={tipoConteudo}
          onChange={(e) => setTipoConteudo(e.target.value)}
        >
          <option value="filmes">Filmes</option>
          <option value="series">Séries</option>
          <option value="livros">Livros</option>
          <option value="usuarios">Usuários</option>{" "}
          {/* Nova opção para Usuários */}
        </select>
      </div>
      <h1 style={{ color: "#fff854" }}>Lista de {tipoConteudo}</h1>
      <div className="add-form">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={novoItem.nome}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={novoItem.id}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={adicionarItem}>
          <IoMdAddCircleOutline color="white" size={22} />
        </button>
      </div>
      {renderizarTabela()}
    </div>
  );
};

export default ContentAdm;
