import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";

import "./OnBoard.css";

const Onboarding = () => {
  const [formData, setFormData] = useState({
    numberOfAgents: "",
    agentType: "",
    serviceIndustry: "",
    uploadedFiles: [],
    toneOfVoice: "",
    additionalGuidelines: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      uploadedFiles: e.target.files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div
      className="onBoard rounded container-fluid"
      style={{ backgroundColor: "#4c4d62" }}
    >
      <h1 className="fs-1" style={{ color: "#de416c" }}>
        Onboarding Questions
      </h1>

      <form onSubmit={handleSubmit} className="p-4">
        <div className="row g-3">
          {/* Number of Agents */}
          <div className="col-md-6">
            <TextField
              label="Number of Agents Required"
              variant="outlined"
              fullWidth
              type="number"
              name="numberOfAgents"
              value={formData.numberOfAgents}
              onChange={handleInputChange}
              required
              sx={{
                "& label": {
                  color: "white", // This will make the label white
                },
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
            />
          </div>

          {/* Agent Type */}
          <div className="col-md-6">
            <FormControl
              fullWidth
              variant="outlined"
              required
              sx={{
                "& label": {
                  color: "white",
                },
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
            >
              <InputLabel id="agentType-label">Agent Type</InputLabel>
              <Select
                labelId="agentType-label"
                id="agentType"
                name="agentType"
                value={formData.agentType}
                onChange={handleInputChange}
                label="Agent Type"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Customer Service">Customer Service</MenuItem>
                <MenuItem value="Sales">Sales</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* Service Industry */}
          <div className="col-md-6">
            <FormControl
              fullWidth
              variant="outlined"
              required
              sx={{
                "& label": {
                  color: "white",
                },
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
            >
              <InputLabel id="serviceIndustry-label">
                Service Industry
              </InputLabel>
              <Select
                labelId="serviceIndustry-label"
                id="serviceIndustry"
                name="serviceIndustry"
                value={formData.serviceIndustry}
                onChange={handleInputChange}
                label="Service Industry"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Web Development & Marketing Agencies">
                  Web Development & Marketing Agencies
                </MenuItem>
                <MenuItem value="E-commerce & Retail">
                  E-commerce & Retail
                </MenuItem>
                <MenuItem value="Banking & Finance">Banking & Finance</MenuItem>
                <MenuItem value="Healthcare">Healthcare</MenuItem>
                <MenuItem value="Travel & Hospitality">
                  Travel & Hospitality
                </MenuItem>
                <MenuItem value="Real Estate">Real Estate</MenuItem>
                <MenuItem value="Customer Support">Customer Support</MenuItem>
                <MenuItem value="Education">Education</MenuItem>
                <MenuItem value="Entertainment">Entertainment</MenuItem>
                <MenuItem value="News and Media">News and Media</MenuItem>
                <MenuItem value="Government Services">
                  Government Services
                </MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* Desired Tone of Voice */}
          <div className="col-md-6">
            <TextField
              label="Desired Tone of Voice for the Agent"
              variant="outlined"
              fullWidth
              type="text"
              name="toneOfVoice"
              value={formData.toneOfVoice}
              onChange={handleInputChange}
              required
              sx={{
                "& label": {
                  color: "white", // This will make the label white
                },
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
            />
          </div>

          {/* Upload Company-Related PDFs */}
          <div className="col-md-6">
            <Box component="label">
              Upload Company-Related PDFs:
              <input
                type="file"
                name="uploadedFiles"
                onChange={handleFileChange}
                multiple
              />
            </Box>
          </div>

          {/* Additional Restrictions or Guidelines */}
          <div className="col-md-6">
            <TextField
              label="Additional Restrictions or Guidelines"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              name="additionalGuidelines"
              value={formData.additionalGuidelines}
              onChange={handleInputChange}
              required
              sx={{
                "& label": {
                  color: "white", // This will make the label white
                },
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
            />
          </div>
        </div>

        {/* Proceed to Checkout Button */}
        <div className="mt-5">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-100 btn-lg"
          >
            Proceed to Checkout
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Onboarding;
