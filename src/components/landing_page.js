import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class LandingPage extends Component {
    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <h3>Landing Page</h3>
                <div className="d-grid">
                    <button type="submit" className="btn btn-link">
                        <Link to="/sign-in" class="btn btn-primary">
                            Login
                        </Link>
                    </button>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-link">
                        <Link to="/sign-up" class="btn btn-primary">
                            Register
                        </Link>
                    </button>
                </div>
            </form>
        );
    }
}
