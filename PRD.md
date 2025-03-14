# Product Requirements Document (PRD)
## Lightweight Chatbase Alternative

### 1. Product Overview

#### 1.1 Purpose
Create a minimal, lightweight open-source alternative to Chatbase that allows users to deploy AI chatbots with custom data sources.

#### 1.2 Core Features
1. Playground - Simple chat testing interface
2. Activity - Basic chat logs
3. Analytics - Essential usage metrics
4. Sources - Document upload and management
5. Actions - Simple workflow automation
6. Contacts - Basic user tracking
7. Connect - Website embedding
8. Settings - Minimal configuration options

### 2. Minimal Requirements

#### 2.1 Playground
- Basic chat interface for testing
- Message history display
- Conversation reset

#### 2.2 Activity
- Simple chat logs with timestamps
- Basic search functionality

#### 2.3 Analytics
- Essential metrics only:
  - Total chats
  - Total messages
  - Basic time-based chart

#### 2.4 Sources
- File upload for:
  - PDF
  - TXT
- Size tracking

#### 2.5 Actions
- 2-3 basic workflow templates
- Simple customization options

#### 2.6 Contacts
- Basic contact storage
- Minimal fields (name, email, ID)

#### 2.7 Connect
- Simple embed code generation
- Basic configuration

#### 2.8 Settings
- Essential configuration only
- Bot name and behavior settings

### 3. Technical Stack

#### 3.1 Backend
- FastAPI (minimal dependencies)
- SQLite for development, MongoDB for production
- Simple JWT authentication

#### 3.2 Frontend
- React with minimal dependencies
- CSS with minimal framework
- Essential JavaScript only

#### 3.3 AI Integration
- OpenAI API connection
- Basic document processing

### 4. Security
- Simple authentication
- HTTPS support
- Basic input validation

### 5. Performance
- Focus on lightweight operation
- Minimal database queries

### 6. Deployment
- Simple Docker setup
- Basic environment configuration

### 7. Documentation
- Installation guide
- API endpoints documentation
- User guide

### 8. Development Approach
- Focus on core functionality first
- Avoid feature creep
- Use existing libraries where possible
- Prioritize simplicity over extensibility
