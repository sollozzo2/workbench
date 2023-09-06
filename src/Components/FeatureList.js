import React, { useState } from 'react';

import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import LockIcon from '@mui/icons-material/Lock';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import CodeIcon from '@mui/icons-material/Code';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import AbcIcon from '@mui/icons-material/Abc';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import ArticleIcon from '@mui/icons-material/Article';
import ConstructionIcon from '@mui/icons-material/Construction';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import SmartInput from './SmartInput';

import TagIcon from '@mui/icons-material/Tag';
import { PropaneSharp, Psychology } from '@mui/icons-material';

const features = ["Hashes", "UUID Generator", "File Upload", "Case Converter", "Chill Zone", "Encoding",
                  "JSON Formatter", "IP", "Color Selector", "HTTP Requester", "Unix Time Converter"];

export default function FeatureList(props) {
    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
  
    const handleClick = () => {
      setOpen(!open);
    };

    const handleListItemClick = (
        event,
        index
    ) => {
        setSelectedIndex(index);
        props.setFeature(index);
    };

    const dropdownSelect = (value) => {
      const newIndex = features.indexOf(value);
      props.setFeature(newIndex);
      setSelectedIndex(newIndex);
    }

    return (
      <Box sx={{mr:1}}> 
        <SmartInput options={features} updateChoices={(value) => dropdownSelect(value)} textLabel="Search"/>


      <List
        sx={{ width: '300px', maxWidth: 300 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >

      

        <ListItemButton onClick={(event) => handleListItemClick(event, 0)} selected={selectedIndex === 0}>
          <ListItemIcon>
            <TagIcon />
          </ListItemIcon>
          <ListItemText primary="Hashes" />
        </ListItemButton>

        <ListItemButton onClick={(event) => handleListItemClick(event, 1)} selected={selectedIndex === 1}>
          <ListItemIcon>
            <FingerprintIcon />
          </ListItemIcon>
          <ListItemText primary="UUID Generator" />
        </ListItemButton>

        <ListItemButton onClick={(event) => handleListItemClick(event, 2)} selected={selectedIndex === 2}>
          <ListItemIcon>
            <FolderSharedIcon />
          </ListItemIcon>
          <ListItemText primary="/tmp" />
        </ListItemButton>

        <ListItemButton onClick={(event) => handleListItemClick(event, 3)} selected={selectedIndex === 3}>
          <ListItemIcon>
            <AbcIcon />
          </ListItemIcon>
          <ListItemText primary="Case Converter" />
        </ListItemButton>

        <ListItemButton onClick={(event) => handleListItemClick(event, 4)} selected={selectedIndex === 4}>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Chill Zone" />
        </ListItemButton>

        <ListItemButton onClick={(event) => handleListItemClick(event, 5)} selected={selectedIndex === 5}>
          <ListItemIcon>
            <SelfImprovementIcon />
          </ListItemIcon>
          <ListItemText primary="Encoding" />
        </ListItemButton>

        <ListItemButton onClick={(event) => handleListItemClick(event, 6)} selected={selectedIndex === 6}>
                <ListItemIcon>
                    <FormatIndentIncreaseIcon />
                </ListItemIcon>
                <ListItemText primary="JSON Formatter" />
            </ListItemButton>

            <ListItemButton onClick={(event) => handleListItemClick(event, 7)} selected={selectedIndex === 7}>
            <ListItemIcon>
                <LockIcon />
            </ListItemIcon>
            <ListItemText primary="What's My IP" />
            </ListItemButton>

            <ListItemButton onClick={(event) => handleListItemClick(event, 8)} selected={selectedIndex === 8}>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="HTML Color" />
            </ListItemButton>

            <ListItemButton onClick={(event) => handleListItemClick(event, 9)} selected={selectedIndex === 9}>
                <ListItemIcon>
                    <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary="HTTP Request Maker" />
            </ListItemButton>

            <ListItemButton onClick={(event) => handleListItemClick(event, 10)} selected={selectedIndex === 10}>
                <ListItemIcon>
                    <CodeIcon />
                </ListItemIcon>
                <ListItemText primary="Unix Time" />
            </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <ConstructionIcon />
          </ListItemIcon>
          <ListItemText primary="In Development" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Regex" />
            </ListItemButton>

            
          </List>
        </Collapse>
      </List>
      </Box>
    );
  }