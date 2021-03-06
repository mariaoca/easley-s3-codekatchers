import React, { Component } from 'react';
import PreviewButton from './PreviewButton';

class MainPreview extends Component {
    writeEmail(email) {
        if (email !== '') {
            return (
                <a className="element__link " href={`mailto: ${this.props.card.email}`} target="_blank">
                    <i className="problematic_icon card_icon fas fa-envelope"></i>
                </a>
            )
        }
    }

    writePhone(phone) {
        if (phone !== '') {
            return (
                <a className="element__link" href={`tel: ${this.props.card.phone}`} target="_blank"> <i className="problematic_icon card_icon fas fa-mobile-alt"></i></a>
            )
        }
    }

    writeLinkedin(linkedin) {
        if (linkedin !== '') {
            return (
                <a className="element__link" href={`https://linkedin.com/in/ ${this.props.card.linkedin}`} target="_blank">
                    <i className="card_icon fab fa-linkedin-in"></i>
                </a>
            )
        }
    }

    writeGithub(github) {
        if (github !== '') {
            return (
                <a className="element__link" href={`https://github.com/ ${this.props.card.github}`} target="_blank">
                    <i className="card_icon fab fa-github-alt"></i>
                </a>
            )
        }
    }

    writeSkills(skills) {
        if (skills !== '') {

            const mappedSkills = skills.map((skill, index) => {
                return (
                    <li className="skills-list__element" key={index}>
                        <p className="element__content">{skill}</p>
                    </li>
                )
            })

            return mappedSkills;
        }
    }

    choosePalette(color) {
        if (color === '1') {
            return ('');
        } else if (color === '2') {
            return ('card__theme-red');
        } else if (color === '3') {
            return ('card__theme-blue');
        }
    }

    chooseTypography(font) {
        if (font === '1') {
            return ('card__typo-ubuntu');
        } else if (font === '2') {
            return ('');
        } else if (font === '3') {
            return ('card__typo-montserrat');
        }
    }


    render() {
        return (
            <section className="cardSection">
                <div className="card">
                    <div className={`card__wrapper ${this.choosePalette(this.props.card.palette)} ${this.chooseTypography(this.props.card.typography)}`} id="card__wrapper">
                        <div className="card__titles">
                            <h2 className="title__name">{this.props.card.name}</h2>
                            <p className="title__profession">{this.props.card.job}</p>
                        </div>
                        <div className="card__image" style={{ backgroundImage: `url(${this.props.card.photo})` }}></div>
                        <ul className="card__list card__contact-list">
                            <li className="contact-list__element contact-list__phone">{this.writePhone(this.props.card.phone)}
                            </li>
                            <li className="contact-list__element contact-list__mail">{this.writeEmail(this.props.card.email)}
                            </li>
                            <li className="contact-list__element contact-list__linkedin">{this.writeLinkedin(this.props.card.linkedin)}
                            </li>
                            <li className="contact-list__element contact-list__github">{this.writeGithub(this.props.card.github)}
                            </li>
                        </ul>
                        <ul className="card__list card__skills-list" id="ul-skills">
                            {this.writeSkills(this.props.card.skills)}
                        </ul>
                        <PreviewButton handleReset={this.props.handleReset} />
                    </div>
                </div>
            </section>
        )
    }
}

export default MainPreview;