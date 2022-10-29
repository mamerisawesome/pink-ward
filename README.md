# Pink Ward

A Performance Evaluation presentation using Spectacle JS. All slide pages are customizable to the manager's liking to give more flexibility on what to show to person being evaluated.

The application also contains some pre-defined constants. The values defined in [Config](#Config) section containing input texts to render in the presentation.

## Stack

* React
* Spectacle
* Tailwind
* Colormap

## Setting Up

```bash
make init
```

## Config

### **[user](src/config/.temp/user.ts)**

User information of person evaluated.

### **[projects](src/config/.temp/projects.ts)**

List of projects tied to the person.

### **[assessments](src/config/.temp/assessments.ts)**

Strenghts and points of improvements for person.

### **[messages](src/config/.temp/messages.ts)**

Comments and other messages from other teammates. Also contains overall summary from manager.
