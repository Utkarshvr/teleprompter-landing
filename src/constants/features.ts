import {
  CaseSensitive,
  CloudCheck,
  FileText,
  FolderInput,
  FolderTree,
  Gauge,
  GripVertical,
  Library,
  LogIn,
  RefreshCw,
  Smartphone,
  TextAlignStart,
  ClipboardPaste,
  Video,
} from "lucide-react";

import type { Feature } from "@/types";

/**
 * Real, shipped features only — kept in sync with `teleprompter-app`.
 * Do not add anything here that the app doesn't actually do.
 */
export const FEATURES: Feature[] = [
  {
    id: "read-while-recording",
    title: "Read while recording",
    description:
      "Keep your script on screen and your eyes on the lens at the same time, so every take feels natural.",
    icon: Video,
  },
  {
    id: "scroll-speed",
    title: "Adjustable scrolling speed",
    description:
      "Dial the scroll speed in to match your pace, from a slow read-through to a quick delivery.",
    icon: Gauge,
  },
  {
    id: "font-size",
    title: "Adjustable font size",
    description:
      "Make text as big or small as you need for comfortable reading at any distance.",
    icon: CaseSensitive,
  },
  {
    id: "text-alignment",
    title: "Text alignment",
    description: "Align your script left, center, or right to fit how you read.",
    icon: TextAlignStart,
  },
  {
    id: "orientation-support",
    title: "Portrait & landscape support",
    description: "Read comfortably whichever way you're holding your device.",
    icon: Smartphone,
  },
  {
    id: "auto-orientation",
    title: "Adapts to device orientation",
    description:
      "Settings automatically adjust when you rotate your device, so you never have to reconfigure mid-take.",
    icon: RefreshCw,
  },
  {
    id: "import-txt",
    title: "Import from TXT",
    description: "Bring in existing scripts instantly by importing a plain text file.",
    icon: FileText,
  },
  {
    id: "import-clipboard",
    title: "Import from clipboard",
    description: "Paste text straight from your clipboard to start reading right away.",
    icon: ClipboardPaste,
  },
  {
    id: "script-library",
    title: "Script library",
    description: "Every script lives in one organized library, ready whenever you need it.",
    icon: Library,
  },
  {
    id: "folder-organization",
    title: "Folder organization",
    description: "Group related scripts into folders to keep your library tidy.",
    icon: FolderTree,
  },
  {
    id: "move-between-folders",
    title: "Move scripts between folders",
    description: "Reorganize as your work evolves by moving scripts between folders freely.",
    icon: FolderInput,
  },
  {
    id: "draggable-controller",
    title: "Freely draggable controller",
    description:
      "Position the script controller anywhere on screen so it never gets in your shot.",
    icon: GripVertical,
  },
  {
    id: "google-sign-in",
    title: "Google Sign In",
    description: "Sign in securely with your Google account in a couple of taps.",
    icon: LogIn,
  },
  {
    id: "cloud-sync",
    title: "Cloud sync",
    description: "Scripts and settings stay in sync across every device you use.",
    icon: CloudCheck,
  },
];
