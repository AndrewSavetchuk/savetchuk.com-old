import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { round } from "javascript-time-ago/steps";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLabels("en", "custom", {
  "second": {
    "past": {
      "one": "Today",
      "other": "Today"
    },
    "future": {
      "one": "Today",
      "other": "Today"
    }
  },
  "minute": {
    "past": {
      "one": "Today",
      "other": "Today"
    },
    "future": {
      "one": "Today",
      "other": "Today"
    }
  },
  "hour": {
    "past": {
      "one": "Today",
      "other": "Today"
    },
    "future": {
      "one": "Today",
      "other": "Today"
    }
  }
});

export const dateHelperStyle = {
  steps: round,
  labels: 'custom'
}

export const DateHelper = new TimeAgo("en-US");
