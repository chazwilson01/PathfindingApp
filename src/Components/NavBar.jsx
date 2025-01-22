import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAlgorithm: 'Dijkstra'
        };
    }

    handleAlgorithmChange = (event) => {
        this.setState({ selectedAlgorithm: event.target.value });
    }

    handleVisualize = () => {
        const { selectedAlgorithm } = this.state;
        if (selectedAlgorithm === 'Dijkstra') {
            this.props.visualizeDijkstra();
        } else if (selectedAlgorithm === 'AStar') {
            this.props.visualizeAStar();
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">Pathfinding Visualizer</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav navbar-center">
                            <li className="nav-item dropdown">
                                <select className="form-select m-2" value={this.state.selectedAlgorithm} onChange={this.handleAlgorithmChange}>
                                    <option value="Dijkstra">Dijkstra's Algorithm</option>
                                    <option value="AStar">A* Algorithm</option>
                                    {/* Add more algorithms here */}
                                </select>
                            </li>
                            <li className="nav-item">
                                <button
                                    onClick={this.handleVisualize}
                                    disabled={this.props.isVisualized}
                                    type='button'
                                    className="btn btn-primary btn-sm m-2 nav-button"
                                >
                                    Visualize
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    onClick={() => this.props.resetGrid()}
                                    className='btn btn-danger btn-sm m-2 nav-button'
                                >
                                    Clear Board
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
