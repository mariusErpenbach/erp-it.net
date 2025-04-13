"use client";

import React, { useEffect, useState } from "react";

type XamlElement = {
    
  element: string;
  framework_used_in: string[];
  allowed_properties: string[];
  description:string;
};

interface XamlElements {
  Steuerelemente: XamlElement[];
  Layout: XamlElement[];
  Eingabeelemente: XamlElement[];
  VisuelleElemente:XamlElement[];
  Navigation:XamlElement[];
  Datenbindung:XamlElement[];
  Styling:XamlElement[];
  AvaloniaExklusiv:XamlElement[];
}

const xamlElements: XamlElements = {
    Steuerelemente: [
      {
        element: "Button",
        framework_used_in: ["WPF", "UWP", "Xamarin", "Avalonia"],
        allowed_properties: ["Content", "IsEnabled", "Click"],
        description: "clickable element to trigger events"
      },
      {
        element: "TextBox",
        framework_used_in: ["WPF", "UWP", "Xamarin", "Avalonia"],
        allowed_properties: ["Text", "IsReadOnly", "MaxLength"],
        description: "paragraph element for strings"
      },
      {
        element: "CheckBox",
        framework_used_in: ["WPF", "UWP", "Xamarin", "Avalonia"],
        allowed_properties: ["IsChecked", "Content", "ThreeState"],
        description: "element for boolean selection"
      },
      {
        element: "RadioButton",
        framework_used_in: ["WPF", "UWP", "Xamarin", "Avalonia"],
        allowed_properties: ["IsChecked", "Content", "GroupName"],
        description: "exclusive selection element within a group"
      },
      {
        element: "ListBox",
        framework_used_in: ["WPF", "UWP", "Avalonia"],
        allowed_properties: ["ItemsSource", "SelectedItem", "SelectionMode"],
        description: "Liste zur Mehrfachauswahl"
      },
      {
        element: "DataGrid",
        framework_used_in: ["WPF", "Avalonia (via Community-Toolkit)"],
        allowed_properties: ["ItemsSource", "AutoGenerateColumns", "SelectedItem"],
        description: "Tabellarische Datenanzeige"
      },
      {
        element: "ToggleButton",
        framework_used_in: ["WPF", "UWP", "Avalonia"],
        allowed_properties: ["IsChecked", "Command", "CommandParameter"],
        description: "Schaltfläche mit Zustandspersistenz"
      },
      {
        element: "TreeView",
        framework_used_in: ["WPF", "UWP", "Avalonia"],
        allowed_properties: ["ItemsSource", "SelectedItem", "HierarchicalDataTemplate"],
        description: "Hierarchische Datenstruktur-Anzeige"
      }
    ],
    Layout: [
      {
        element: "StackPanel",
        framework_used_in: ["WPF", "UWP", "Avalonia"],
        allowed_properties: ["Orientation", "Children"],
        description: "arranges child elements in a single line (horizontal or vertical)"
      },
      {
        element: "Grid",
        framework_used_in: ["WPF", "UWP", "Avalonia"],
        allowed_properties: ["RowDefinitions", "ColumnDefinitions"],
        description: "roster pattern to define rows and columns"
      },
      {
        element: "DockPanel",
        framework_used_in: ["WPF", "Avalonia"], 
        allowed_properties: ["LastChildFill", "Dock"],
        description: "docking layout container for child elements"
      },
      {
        element: "WrapPanel",
        framework_used_in: ["WPF", "Avalonia"], 
        allowed_properties: ["Orientation", "ItemWidth", "ItemHeight"],
        description: "positions child elements sequentially with wrapping"
      },
      {
        element: "Canvas",
        framework_used_in: ["WPF", "UWP", "Avalonia"],
        allowed_properties: ["Left", "Top", "Children"],
        description: "Freie Positionierung per Koordinaten"
      },
      {
        element: "Border",
        framework_used_in: ["WPF", "UWP", "Avalonia"],
        allowed_properties: ["BorderThickness", "BorderBrush", "CornerRadius"],
        description: "Rahmen mit dekorativen Eigenschaften"
      },
      {
        element: "RelativePanel",
        framework_used_in: ["UWP"],
        allowed_properties: ["AlignLeftWith", "Below"],
        description: "Relatives Positionierungssystem (UWP-exklusiv)"
      },
      {
        element: "UniformGrid",
        framework_used_in: ["WPF", "Avalonia"],
        allowed_properties: ["Rows", "Columns", "FirstColumn"],
        description: "Gleichmäßige Zellenverteilung"
      }
    ],
    Eingabeelemente: [
      {
        element: "ComboBox",
        framework_used_in: ["WPF", "UWP", "Avalonia"],
        allowed_properties: ["ItemsSource", "SelectedItem", "IsEditable"],
        description: "dropdown selection control"
      },
      {
        element: "Slider",
        framework_used_in: ["WPF", "UWP", "Avalonia"],
        allowed_properties: ["Minimum", "Maximum", "Value", "Orientation"],
        description: "allows selection from a range of values by dragging a thumb"
      },
      {
        element: "DatePicker",
        framework_used_in: ["WPF", "UWP", "Avalonia"],
        allowed_properties: ["SelectedDate", "DisplayDate", "FirstDayOfWeek"],
        description: "control for date selection"
      },
      {
        element: "TimePicker",
        framework_used_in: ["UWP", "Xamarin", "Avalonia"],
        allowed_properties: ["SelectedTime", "MinuteIncrement"],
        description: "Zeiteingabe-Control"
      },
      {
        element: "PasswordBox",
        framework_used_in: ["WPF", "UWP", "Avalonia"],
        allowed_properties: ["Password", "PasswordChar", "MaxLength"],
        description: "Sichere Passworteingabe"
      },
      {
        element: "NumericUpDown",
        framework_used_in: ["WPF (via Toolkit)", "Avalonia (via Extended)"],
        allowed_properties: ["Value", "Minimum", "Increment"],
        description: "Numerische Eingabe mit Inkrementsteuerung"
      }
    ],
    VisuelleElemente: [
      {
        element: "Image",
        framework_used_in: ["WPF", "UWP", "Xamarin", "Avalonia"],
        allowed_properties: ["Source", "Stretch", "Width", "Height"],
        description: "displays an image"
      },
      {
        element: "Ellipse",
        framework_used_in: ["WPF", "UWP", "Avalonia"],
        allowed_properties: ["Fill", "Stroke", "Width", "Height"],
        description: "draws an ellipse shape"
      },
      {
        element: "Rectangle",
        framework_used_in: ["WPF", "UWP", "Avalonia"],
        allowed_properties: ["Fill", "Stroke", "RadiusX", "RadiusY"],
        description: "draws a rectangle shape"
      },
      {
        element: "Path",
        framework_used_in: ["WPF", "UWP", "Avalonia"],
        allowed_properties: ["Data", "Stroke", "Fill"],
        description: "Komplexe Vektorformen mittels Geometrie"
      },
      {
        element: "Line",
        framework_used_in: ["WPF", "UWP", "Avalonia"],
        allowed_properties: ["X1", "Y1", "X2", "Stroke"],
        description: "Einfache Linienzeichnung"
      },
      {
        element: "Polygon",
        framework_used_in: ["WPF", "UWP", "Avalonia"],
        allowed_properties: ["Points", "FillRule", "Stroke"],
        description: "Vieleck-Formen"
      },
      {
        element: "Viewbox",
        framework_used_in: ["WPF", "UWP"],
        allowed_properties: ["Stretch", "StretchDirection"],
        description: "Skalierbarer Container"
      }

    ],
    Navigation: [
        {
          element: "Frame",
          framework_used_in: ["WPF", "UWP"],
          allowed_properties: ["Source", "NavigationUIVisibility"],
          description: "Seitennavigation mit Journal"
        },
        {
          element: "NavigationView",
          framework_used_in: ["UWP"],
          allowed_properties: ["PaneDisplayMode", "MenuItems"],
          description: "Modernes Navigationspattern (UWP-exklusiv)"
        }
      ],
      Datenbindung: [
        {
          element: "ItemsControl",
          framework_used_in: ["WPF", "UWP", "Avalonia"],
          allowed_properties: ["ItemsSource", "ItemTemplate", "ItemsPanel"],
          description: "Basisklasse für listenbasierte Controls"
        },
        {
          element: "ContentControl",
          framework_used_in: ["WPF", "UWP", "Avalonia"],
          allowed_properties: ["Content", "ContentTemplate"],
          description: "Generischer Content-Container"
        }
      ],
      Styling: [
        {
          element: "ResourceDictionary",
          framework_used_in: ["WPF", "UWP", "Avalonia"],
          allowed_properties: ["Source", "MergedDictionaries"],
          description: "Ressourcenverwaltung für Styles"
        },
        {
          element: "Style",
          framework_used_in: ["WPF", "UWP", "Avalonia"],
          allowed_properties: ["TargetType", "Setters", "BasedOn"],
          description: "Steuerelement-Styling"
        },
        {
          element: "ControlTemplate",
          framework_used_in: ["WPF", "UWP", "Avalonia"],
          allowed_properties: ["TargetType", "Triggers", "Resources"],
          description: "Visuelle Neudefinition von Controls"
        }
      ],
      AvaloniaExklusiv: [
        {
          element: "ExperimentalAcrylicBorder",
          framework_used_in: ["Avalonia"],
          allowed_properties: ["Material", "TintColor", "CornerRadius"],
          description: "Fließender Acrylic-Effekt (Windows 11-Stil)"
        },
        {
          element: "NativeMenu",
          framework_used_in: ["Avalonia"],
          allowed_properties: ["Menu", "IsNativeMenuExported"],
          description: "Plattformnative Menüleisten (macOS-Topbar, Windows-Taskleiste)"
        },
        {
          element: "AutoCompleteBox",
          framework_used_in: ["Avalonia"],
          allowed_properties: ["Watermark", "FilterMode", "Items"],
          description: "Suchvorschläge mit Token-Unterstützung"
        },
        {
          element: "PathIcon",
          framework_used_in: ["Avalonia"],
          allowed_properties: ["Data", "Fill"],
          description: "Vektor-Icons via Path-Geometrie (ähnlich Flutter)"
        },
        {
          element: "TransitioningContentControl",
          framework_used_in: ["Avalonia"],
          allowed_properties: ["PageTransition", "Duration"],
          description: "Animierter Seitenwechsel (Slide/Fade)"
        },
        {
          element: "HeaderedContentControl",
          framework_used_in: ["Avalonia"],
          allowed_properties: ["Header", "HeaderTemplate"],
          description: "Generische Header-Container (wie Expander)"
        },
        {
          element: "ColorView",
          framework_used_in: ["Avalonia"],
          allowed_properties: ["Color", "HsvColor", "HexInput"],
          description: "Erweiterte Farbauswahl mit HSB/HEX"
        },
        {
            element: "Gestures",
            framework_used_in: ["Avalonia"],
            allowed_properties: ["PullGesture", "ScrollGesture", "TapGesture"],
            description: "Touch-Gesten für Mobile/Tablet"
          },
          {
            element: "Platform Behaviors",
            framework_used_in: ["Avalonia"],
            allowed_properties: ["IOSSafeArea", "AndroidStatusBarColor"],
            description: "Plattformspezifisches Styling im XAML"
          },
          {
            element: "RenderTransform (3D)",
            framework_used_in: ["Avalonia"],
            allowed_properties: ["Rotation3D", "Scale3D"],
            description: "Einfache 3D-Transforms (Skia-basiert)"
          }
        
      ]
      
  };

const XamlElementList: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    setCategories(Object.keys(xamlElements));
  }, []);

  return (
    <div id="xaml-list">
      <h1>Liste der XAML-Elemente</h1>
      {categories.map((category, index) => (
        <div key={index} className="category-section">
          <h2>{category}</h2>
          <table>
            <thead>
              <tr>
                <th>Element</th>
                <th>Framework(s)</th>
                <th>Erlaubte Eigenschaften</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {xamlElements[category as keyof XamlElements].map((item, index) => (
                <tr key={index}>
                  <td>{item.element}</td>
                  <td>{item.framework_used_in.join(", ")}</td>
                  <td>{item.allowed_properties.join(", ")}</td>
                  <td>{item.description}</td> 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default XamlElementList;
