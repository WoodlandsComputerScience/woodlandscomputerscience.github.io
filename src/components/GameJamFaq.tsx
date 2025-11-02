import * as Accordion from "@radix-ui/react-accordion";
import { FaChevronDown } from "react-icons/fa6";



export default function Acordion() {
    return <Accordion.Root type="single" collapsible className="accordion">
        <Accordion.Item value="faq-prizes" className="accordion-item">
            <Accordion.Header className="accordion-header">
                <Accordion.Trigger className="accordion-trigger">
                    Are there any prizes?
                    <FaChevronDown className="accordion-icon" />
                </Accordion.Trigger>    
            </Accordion.Header>
            <Accordion.Content className="accordion-content">
                <p>
                    The exec team is currently broke, but the prizes are:
                    <ul>
                        <li>1st place: $25 for your team</li>
                        <li>2nd place: $15 for your team</li>
                        <li>3rd place: $10 for your team</li>
                        <li>Winners could also get a boost to their future executive applications for the club next year 🌚</li>
                        <li>All participants who make submissions will be featured on our socials and website!</li>
                    </ul>
                </p>
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="faq1" className="accordion-item">
            <Accordion.Header className="accordion-header">
                <Accordion.Trigger className="accordion-trigger">
                    Can I use an engine other than Godot?
                    <FaChevronDown className="accordion-icon" />
                </Accordion.Trigger>    
            </Accordion.Header>
            <Accordion.Content className="accordion-content">
                <p>
                    Yes! You are free to use any engine you wish. However, club lessons will be focused on Godot
                    this year.
                </p>
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="faq2" className="accordion-item">
            <Accordion.Header className="accordion-header">
                <Accordion.Trigger className="accordion-trigger">
                    How large can my team be?
                    <FaChevronDown className="accordion-icon" />
                </Accordion.Trigger>    
            </Accordion.Header>
            <Accordion.Content className="accordion-content">
                <p>
                    Traditionally, teams have been 4 people, but that is not a hard limit.
                </p>
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="faq3" className="accordion-item">
            <Accordion.Header className="accordion-header">
                <Accordion.Trigger className="accordion-trigger">
                    Do I have to follow the theme?
                    <FaChevronDown className="accordion-icon" />
                </Accordion.Trigger>    
            </Accordion.Header>
            <Accordion.Content className="accordion-content">
                <p>
                    The theme is meant to inspire rather than constrain. Use it as a starting point when brainstorming
                    your game's premise.
                </p>
            </Accordion.Content>
        </Accordion.Item>
    </Accordion.Root>
}