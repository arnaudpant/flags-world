## Pour les liens <a> en html: 
import { NavLink } from 'react-router-dom';

<NavLink to="/">...</NavLink>

## Pour les fetchs
npm i axios

## GIT

<type>[optional scope]: <description>
    fix: fix foo to enable bar

[optional body]
    This fixes the broken behavior of the component by doing xyz.

[optional footer(s)]
BREAKING CHANGE:<description>pour noter la raison d'un changement avec rupture dans le commit.

BREAKING CHANGE
Before this fix foo wasn't enabled at all, behavior changes from <old>
<type>:



**feat** – une nouvelle fonctionnalité est introduite avec les changements

**fix** – une correction de bogue s'est produite

**chore** – changements qui ne concernent pas un correctif ou une fonctionnalité et ne modifient pas les fichiers src ou de test (par exemple la mise à jour des dépendances)

**refactor** – code refactorisé qui ne corrige pas de bogue ni n'ajoute de fonctionnalité

**docs** - mises à jour de la documentation telles que le fichier README ou d'autres fichiers de démarquage

**style** – les modifications qui n'affectent pas la signification du code, probablement liées au formatage du code, telles que les espaces blancs, les points-virgules manquants, etc.

**test** – y compris les nouveaux tests ou la correction des tests précédents

**perf** - Amélioration des performances

**ci** – liés à l'intégration continue

**build** – changements qui affectent le système de construction ou les dépendances externes

**revert**– annule un commit précédent