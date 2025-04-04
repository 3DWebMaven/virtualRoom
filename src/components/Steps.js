import React from "react"

const Highlight = ({ children }) => <span style={{ fontSize: "1.2em", color: "#fbff49", fontWeight: "bold" }}>{children}</span>

const steps = [
  {
    id: "1-first",
    component: <div>Hello, I can provide information about the BESS project. Which category would you like to explore?</div>,
    asMessage: true,
    trigger: "1-0"
  },
  {
    id: "1",
    component: <div>Would you like to explore another category?</div>,
    asMessage: true,
    trigger: "1-0"
  },
  {
    id: "1-0",
    options: [
      { value: 1, label: "Environmental Impact", trigger: "1-1-first" },
      { value: 2, label: "Visual & Landscape Impact", trigger: "1-2-first" },
      { value: 3, label: "Noise and Safety Concerns", trigger: "1-3-first" },
      { value: 4, label: "Traffic and Construction Impact", trigger: "1-4-first" },
      { value: 5, label: "Community and Economic Benefits", trigger: "1-5-first" },
      { value: 6, label: "Energy & Grid Impact", trigger: "1-6-first" },
      { value: 7, label: "Land Use and Planning", trigger: "1-7-first" },
      { value: 8, label: "End-of-Life & Decommissioning", trigger: "1-8-first" },
      { value: 9, label: "Public Engagement & Next Steps", trigger: "1-9-first" }
    ]
  },

  // Environmental Impact
  {
    id: "1-1-first",
    component: <div>Here are questions about <Highlight>Environmental Impact</Highlight>:</div>,
    asMessage: true,
    trigger: "1-1-0"
  },
  {
    id: "1-1",
    component: <div>Would you like another question about <Highlight>Environmental Impact</Highlight>?</div>,
    asMessage: true,
    trigger: "1-1-0"
  },
  {
    id: "1-1-0",
    options: [
      { value: 1, label: "Will the project harm local wildlife or the environment?", trigger: "1-1-1" },
      { value: 2, label: "Will the project affect air and water quality?", trigger: "1-1-2" },
      { value: 3, label: "Go to Category", trigger: "1" }
    ]
  },
  {
    id: "1-1-1",
    component: (
      <div>
        <ul>
          <li>Environmental Impact Assessments (EIA) have been conducted to ensure minimal disruption.</li>
          <li>
            Measures like <Highlight>ecological surveys, habitat preservation, and replanting</Highlight> will be implemented.
          </li>
          <li>No emissions are produced during BESS operation.</li>
        </ul>
      </div>
    ),
    asMessage: true,
    trigger: "1-1"
  },
  {
    id: "1-1-2",
    component: (
      <div>
        <ul>
          <li>
            BESS is a <Highlight>zero-emission</Highlight> technology and does not produce air pollutants.
          </li>
          <li>Strict controls prevent any leakage of chemicals into the soil or water.</li>
        </ul>
      </div>
    ),
    asMessage: true,
    trigger: "1-1"
  },

  // Visual & Landscape Impact
  {
    id: "1-2-first",
    component: <div>Here are questions about <Highlight>Visual & Landscape Impact:</Highlight></div>,
    asMessage: true,
    trigger: "1-2-0"
  },
  {
    id: "1-2",
    component: <div>Would you like another question about <Highlight>Visual & Landscape Impact?</Highlight></div>,
    asMessage: true,
    trigger: "1-2-0"
  },
  {
    id: "1-2-0",
    options: [
      { value: 1, label: "How will the project affect the local landscape?", trigger: "1-2-1" },
      { value: 2, label: "Will there be light pollution?", trigger: "1-2-2" },
      { value: 3, label: "Go to Category", trigger: "1" }
    ]
  },
  {
    id: "1-2-1",
    component: (
      <div>
        <ul>
          <li>
            The project will be <Highlight>strategically placed</Highlight> to minimize visual impact.
          </li>
          <li>
            Screening methods like <Highlight>tree planting, fencing, and landscaping</Highlight> will be used.
          </li>
        </ul>
      </div>
    ),
    asMessage: true,
    trigger: "1-2"
  },
  {
    id: "1-2-2",
    component: (
      <div>
        <ul>
          <li>
            Minimal lighting will be used, designed to comply with <Highlight>Dark Sky policies</Highlight> and reduce glare.
          </li>
        </ul>
      </div>
    ),
    asMessage: true,
    trigger: "1-2"
  },

  // Noise and Safety Concerns
  {
    id: "1-3-first",
    component: <div>Here are questions about <Highlight>Noise and Safety Concerns:</Highlight></div>,
    asMessage: true,
    trigger: "1-3-0"
  },
  {
    id: "1-3",
    component: <div>Would you like another question about <Highlight>Noise and Safety Concerns?</Highlight></div>,
    asMessage: true,
    trigger: "1-3-0"
  },
  {
    id: "1-3-0",
    options: [
      { value: 1, label: "Will the BESS or substation generate noise?", trigger: "1-3-1" },
      { value: 2, label: "Are there fire or explosion risks?", trigger: "1-3-2" },
      { value: 3, label: "Is electromagnetic radiation (EMF) from the substation harmful?", trigger: "1-3-3" },
      { value: 4, label: "Go to Category", trigger: "1" }
    ]
  },
  {
    id: "1-3-1",
    component: (
      <div>
        <ul>
          <li>
            Noise impact studies confirm that sound levels will be <Highlight>low and within legal limits</Highlight>.
          </li>
          <li>Acoustic enclosures and insulation will reduce operational noise.</li>
        </ul>
      </div>
    ),
    asMessage: true,
    trigger: "1-3"
  },
  {
    id: "1-3-2",
    component: (
      <div>
        <ul>
          <li>
            The system uses <Highlight>advanced fire suppression</Highlight> and monitoring technology.
          </li>
          <li>
            The project follows <Highlight>UK Fire and Safety Regulations</Highlight>, and emergency response plans are in place.
          </li>
        </ul>
      </div>
    ),
    asMessage: true,
    trigger: "1-3"
  },
  {
    id: "1-3-3",
    component: (
      <div>
        <ul>
          <li>
            EMF levels from substations are <Highlight>far below international safety limits</Highlight>.
          </li>
          <li>
            Numerous studies confirm <Highlight>no proven health risks</Highlight> from substations.
          </li>
        </ul>
      </div>
    ),
    asMessage: true,
    trigger: "1-3"
  },

  // Traffic and Construction Impact
  {
    id: "1-4-first",
    component: <div>Here are questions about <Highlight>Traffic and Construction Impact:</Highlight></div>,
    asMessage: true,
    trigger: "1-4-0"
  },
  {
    id: "1-4",
    component: <div>Would you like another question about <Highlight>Traffic and Construction Impact?</Highlight></div>,
    asMessage: true,
    trigger: "1-4-0"
  },
  {
    id: "1-4-0",
    options: [
      { value: 1, label: "Will there be heavy construction traffic?", trigger: "1-4-1" },
      { value: 2, label: "How long will construction take?", trigger: "1-4-2" },
      { value: 3, label: "Go to Category", trigger: "1" }
    ]
  },
  {
    id: "1-4-1",
    component: (
      <div>
        <ul>
          <li>
            A <Highlight>Traffic Management Plan</Highlight> will minimize disruptions.
          </li>
          <li>
            Most heavy transport occurs during initial phases, with long-term traffic impact being <Highlight>minimal</Highlight>.
          </li>
        </ul>
      </div>
    ),
    asMessage: true,
    trigger: "1-4"
  },
  {
    id: "1-4-2",
    component: (
      <div>
        <ul>
          <li>
            The project is expected to take <Highlight>[insert timeline] months</Highlight>, with strict working hours to reduce disruption.
          </li>
        </ul>
      </div>
    ),
    asMessage: true,
    trigger: "1-4"
  },

  // Community and Economic Benefits
  {
    id: "1-5-first",
    component: <div>Here are questions about <Highlight>Community and Economic Benefits:</Highlight></div>,
    asMessage: true,
    trigger: "1-5-0"
  },
  {
    id: "1-5",
    component: <div>Would you like another question about <Highlight>Community and Economic Benefits?</Highlight></div>,
    asMessage: true,
    trigger: "1-5-0"
  },
  {
    id: "1-5-0",
    options: [
      { value: 1, label: "Will this project benefit the local economy?", trigger: "1-5-1" },
      { value: 2, label: "Are there community benefits?", trigger: "1-5-2" },
      { value: 3, label: "Go to Category", trigger: "1" }
    ]
  },
  {
    id: "1-5-1",
    component: (
      <div>
        <ul>
          <li>
            Local businesses will have opportunities to <Highlight>supply materials and services</Highlight>.
          </li>
          <li>
            The project will create <Highlight>temporary construction jobs and permanent maintenance roles</Highlight>.
          </li>
        </ul>
      </div>
    ),
    asMessage: true,
    trigger: "1-5"
  },
  {
    id: "1-5-2",
    component: (
      <div>
        <ul>
          <li>
            A <Highlight>Community Benefit Fund</Highlight> may be set up to support local initiatives.
          </li>
          <li>
            Infrastructure improvements, such as <Highlight>road upgrades or local services</Highlight>, may be included.
          </li>
        </ul>
      </div>
    ),
    asMessage: true,
    trigger: "1-5"
  },

  // Energy & Grid Impact
  {
    id: "1-6-first",
    component: <div>Here are questions about <Highlight>Energy & Grid Impact:</Highlight></div>,
    asMessage: true,
    trigger: "1-6-0"
  },
  {
    id: "1-6",
    component: <div>Would you like another question about <Highlight>Energy & Grid Impact?</Highlight></div>,
    asMessage: true,
    trigger: "1-6-0"
  },
  {
    id: "1-6-0",
    options: [
      { value: 1, label: "How does the project benefit the UK's energy system?", trigger: "1-6-1" },
      { value: 2, label: "Will this power the local area?", trigger: "1-6-2" },
      { value: 3, label: "Go to Category", trigger: "1" }
    ]
  },
  {
    id: "1-6-1",
    component: (
      <div>
        <ul>
          <li>
            The BESS stores excess renewable energy, ensuring a <Highlight>stable and reliable</Highlight> power supply.
          </li>
          <li>
            It helps reduce reliance on fossil fuels and lowers <Highlight>electricity costs over time</Highlight>.
          </li>
        </ul>
      </div>
    ),
    asMessage: true,
    trigger: "1-6"
  },
  {
    id: "1-6-2",
    component: (
      <div>
        <ul>
          <li>
            The project integrates with the <Highlight>National Grid</Highlight>, helping manage local and regional power demands.
          </li>
        </ul>
      </div>
    ),
    asMessage: true,
    trigger: "1-6"
  },

  // Land Use and Planning
  {
    id: "1-7-first",
    component: <div>Here are questions about <Highlight>Land Use and Planning:</Highlight></div>,
    asMessage: true,
    trigger: "1-7-0"
  },
  {
    id: "1-7",
    component: <div>Would you like another question about <Highlight>Land Use and Planning?</Highlight></div>,
    asMessage: true,
    trigger: "1-7-0"
  },
  {
    id: "1-7-0",
    options: [
      { value: 1, label: "Why was this site chosen?", trigger: "1-7-1" },
      { value: 2, label: "Does this align with local and national planning policies?", trigger: "1-7-2" },
      { value: 3, label: "Go to Category", trigger: "1" }
    ]
  },
  {
    id: "1-7-1",
    component: (
      <div>
        <ul>
          <li>
            The site was selected due to its <Highlight>proximity to existing grid infrastructure</Highlight> and{" "}
            <Highlight>minimal environmental impact</Highlight>.
          </li>
          <li>
            Alternative locations were evaluated, but this site was found to be the <Highlight>most suitable</Highlight>.
          </li>
        </ul>
      </div>
    ),
    asMessage: true,
    trigger: "1-7"
  },
  {
    id: "1-7-2",
    component: (
      <div>
        <ul>
          <li>
            The project supports the UK's <Highlight>Net Zero goals</Highlight> and <Highlight>renewable energy targets</Highlight>.
          </li>
          <li>
            It complies with <Highlight>local council planning regulations</Highlight> and has undergone a full review.
          </li>
        </ul>
      </div>
    ),
    asMessage: true,
    trigger: "1-7"
  },

  // End-of-Life & Decommissioning
  {
    id: "1-8-first",
    component: <div>Here are questions about <Highlight>End-of-Life & Decommissioning:</Highlight></div>,
    asMessage: true,
    trigger: "1-8-0"
  },
  {
    id: "1-8",
    component: <div>Would you like another question about <Highlight>End-of-Life & Decommissioning?</Highlight></div>,
    asMessage: true,
    trigger: "1-8-0"
  },
  {
    id: "1-8-0",
    options: [
      { value: 1, label: "What happens when the project reaches the end of its life?", trigger: "1-8-1" },
      { value: 2, label: "Go to Category", trigger: "1" }
    ]
  },
  {
    id: "1-8-1",
    component: (
      <div>
        <ul>
          <li>
            The facility is <Highlight>fully recyclable</Highlight>, and batteries will be <Highlight>repurposed or safely disposed of</Highlight>.
          </li>
          <li>
            A <Highlight>Decommissioning Plan</Highlight> ensures responsible site restoration.
          </li>
        </ul>
      </div>
    ),
    asMessage: true,
    trigger: "1-8"
  },

  // Public Engagement & Next Steps
  {
    id: "1-9-first",
    component: <div>Here are questions about <Highlight>Public Engagement & Next Steps:</Highlight></div>,
    asMessage: true,
    trigger: "1-9-0"
  },
  {
    id: "1-9",
    component: <div>Would you like another question about <Highlight>Public Engagement & Next Steps?</Highlight></div>,
    asMessage: true,
    trigger: "1-9-0"
  },
  {
    id: "1-9-0",
    options: [
      { value: 1, label: "How can the community stay involved?", trigger: "1-9-1" },
      { value: 2, label: "What are the next steps?", trigger: "1-9-2" },
      { value: 3, label: "Go to Category", trigger: "1" }
    ]
  },
  {
    id: "1-9-1",
    component: (
      <div>
        <ul>
          <li>
            Regular updates will be provided through <Highlight>public meetings, newsletters, and an online portal</Highlight>.
          </li>
          <li>
            A <Highlight>community liaison officer</Highlight> will be available for queries.
          </li>
        </ul>
      </div>
    ),
    asMessage: true,
    trigger: "1-9"
  },
  {
    id: "1-9-2",
    component: (
      <div>
        <ul>
          <li>Community feedback will be reviewed, and necessary adjustments will be made.</li>
          <li>Planning applications will be submitted, followed by a final consultation.</li>
        </ul>
      </div>
    ),
    asMessage: true,
    trigger: "1-9"
  }
]

export default steps
