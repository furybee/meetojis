# Meetojis - Architecture SOLID

Cette refactorisation applique les principes SOLID pour une base de code maintenable et extensible.

## Structure des Dossiers

```
js/
├── data/           # Données et constantes
├── services/       # Services métier
├── components/     # Composants UI
├── content.js      # Point d'entrée
└── meetojis-controller.js  # Contrôleur principal
```

## Principes SOLID Appliqués

### 1. **Single Responsibility Principle (SRP)**

- **EmojiData**: Gère uniquement les données d'emojis
- **DomService**: Gère uniquement les opérations DOM
- **EmojiService**: Gère uniquement la logique des emojis (recherche, filtrage)
- **EmojiButton**: Gère uniquement le bouton principal
- **EmojiPicker**: Gère uniquement l'interface du picker

### 2. **Open/Closed Principle (OCP)**

- Ajout de nouvelles catégories d'emojis sans modifier le code existant
- Extension facile avec de nouveaux types de services
- Composants extensibles via héritage

### 3. **Liskov Substitution Principle (LSP)**

- Les services peuvent être remplacés par des implémentations alternatives
- Interface cohérente entre tous les composants

### 4. **Interface Segregation Principle (ISP)**

- Chaque classe n'expose que les méthodes nécessaires
- Séparation claire entre les responsabilités

### 5. **Dependency Inversion Principle (DIP)**

- Le contrôleur dépend d'abstractions (services)
- Injection de dépendances pour faciliter les tests
- Inversion du contrôle

## Composants

### MeetojisController

Contrôleur principal qui orchestre tous les composants.

- Coordonne les services et composants
- Gère le cycle de vie de l'application
- Point d'entrée unique

### Services

#### DomService

- Manipulation DOM
- Recherche d'éléments
- Gestion des événements

#### EmojiService

- Logique des emojis
- Recherche et filtrage
- Gestion des catégories

### Composants UI

#### EmojiButton

- Bouton principal dans Meet
- Gestion de l'injection dans le DOM
- Déclenchement du picker

#### EmojiPicker

- Interface du picker d'emojis
- Gestion des catégories
- Recherche en temps réel

## Avantages de cette Architecture

1. **Maintenabilité**: Code organisé et facile à comprendre
2. **Testabilité**: Chaque composant peut être testé isolément
3. **Extensibilité**: Ajout facile de nouvelles fonctionnalités
4. **Réutilisabilité**: Composants indépendants et réutilisables
5. **Débogage**: Isolation des problèmes par composant

## Ajout de Nouvelles Fonctionnalités

### Nouvelle Catégorie d'Emoji

1. Ajouter dans `EmojiData.CATEGORIES`
2. Ajouter l'icône dans `EmojiData.CATEGORY_ICONS`
3. Aucun autre changement nécessaire ✨

### Nouveau Service

1. Créer dans `js/services/`
2. Injecter dans `MeetojisController`
3. Utiliser via l'injection de dépendances

### Nouveau Composant UI

1. Créer dans `js/components/`
2. Hériter du pattern existant
3. Intégrer dans le contrôleur
