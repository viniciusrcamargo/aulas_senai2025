import react, {useState, useEffect} from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function RelatorioMovimentacoes(){

    return(
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Relatório de Movimentações
            </h2>
            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>Data</th>
                            <th>Descrição</th>
                            <th className="text-end">Valor R$</th>
                            <th>Tipo</th>
                            <th>Usuário</th>
                            <th>Tipo Pagamento</th>
                            <th className="text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10/05/2025</td>
                            <td>Mesada</td>
                            <td>R$ 1500,00</td>
                            <td>Entrada</td>
                            <td>Erik</td>
                            <td>PIX</td>
                            <td>
                                <button title="Editar" className="btn btn-sm btn-outline-primary me-2">
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                                <button title="Excluir" className="btn btn-sm btn-outline-danger me-2">
                                    <i className="bi bi-trash3-fill"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
}