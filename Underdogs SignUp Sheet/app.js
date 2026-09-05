const suppliedUnits = [
  'Janissaries','Outriders','Tseregs','Matchlock Ashigaru','Khevtuul Cavalry','Iron Reapers','Shenji Grenadiers','Kheshigs',
  'Black Dragon Javelineers','Rattan Crossbows','Caradoc Cavalry','Galahad Javelins','Imperial Archers','Yorkist Knights','Spartans Chosen','Siphonarioi','Xuanjia Cavalry',
  'Mace Sergeants','Demesne Arbalists','Reitar Pistoleers','Claymores','Longbows','Kreigsbruders','Queens Knights','Lionroar Cannons','Yanyuedao Cavalry',
  'Wuxing Pikemen','Zykalian Militia','Selemchid Cavalry','Fortebraccios','Swinefeathers','Camel Lancers','Zweihanders','Falconetti Gunners','Winged Hussars',
  'Doppelsoldner','Rattan Vipers','Khorchins','Imperial Pike Guard','Kreigsrat Fusiliers','Prefecture Heavy Cav','Sunward Phalanx','Royal Longbows','Rattan Rangers',
  'Ironcap Spearmen','Qins Footbows','Symmachean Paladins','Imperial Arquebusiers','Dagger-Axe Lancers','Retiarii','Tercio Arquebusiers','Fire Lancers',
  'Halberdiers','Feathered Crossbows','Men at Arms','Sipahis','Silahdars','Hwarangs','Cataphract Lancers',
  'Dimachaeri','Schutzdieners','Palace Guard','Yeomans','Shieldmaidens','Houndsmen','Monastic Knights',
  'Sons of Fenrir','Incendinary Archers','Lancastrian Billmen','Companion Cavalry','Orochi Samurai','Order of the Dragon',
  'Prefecture Pikemen','Namkhan Archers','Zealots','Armiger Lancers','Hashashin','Empire Chariot',
  'Bagpipes','Demense Arqubusiers','Wuwei Mansion Guard','Varangian Guard','Chevaliers',
  'Condottieri Guard','Vanguard Archers','Myrmillones','Modao Battalion','Liaos Rangers',
  'Prefecture Guard','Prefecture Achers','Symmachean Stalwarts','White Plume Guard','Tiger & Leopard Cav',
  'Squires','Sea Stag Deathdealers','Spear Sergeants','Silla Guard','Psiloi Slingers','Imperial Spear Guard','Ronin','Crescent Monks','Jangjus','Berserkers',
  'Alchemists','Halberdier Sergeants','Cudgel Monks','Onna-Musha','Black Dragon Pikemen','Laconic Javelins','Black Dragon Spearmen','Halberd Elite',
  'Nagatina Monks','Azaps','Landsknechts','Huskarls','Yellow Turbans','Javelin Sergeants','Imperial Javelins','Tiger Fists','Banner Guards','Axe Raiders','Greyhair Garrison'
];

const suppliedArtillery = [
  'Ballista','Grapeshot','Cannon','Scorpio','Great Bombard','Thunderstar','Hwacha Arrow Launcher','War Rockets','Flaming Comet','Divine Crow','Mortar','Culverin','Catapult','Trebuchet','Siege Ballista','Battering Ram','Siege Tower'
];

const unitMeta = {};
function labelUnits(names, tier, tag) { names.forEach(name => unitMeta[name] = { tier, tag }); }
labelUnits(['Black Dragon Javelineers','Mace Sergeants','Wuxing Pikemen','Doppelsoldner','Ironcap Spearmen','Halberdiers','Dimachaeri','Sons of Fenrir','Prefecture Pikemen','Bagpipes','Condottieri Guard','Prefecture Guard','Squires','Silla Guard','Ronin','Jangjus','Alchemists','Cudgel Monks','Black Dragon Pikemen','Black Dragon Spearmen','Nagatina Monks','Landsknechts','Yellow Turbans'], 3, 'infantry');
labelUnits(['Janissaries','Rattan Crossbows','Demesne Arbalists','Rattan Vipers','Qins Footbows','Feathered Crossbows','Incendinary Archers','Namkhan Archers','Demense Arqubusiers','Vanguard Archers','Prefecture Achers','Sea Stag Deathdealers','Psiloi Slingers'], 3, 'ranged');
labelUnits(['Outriders','Caradoc Cavalry','Reitar Pistoleers','Selemchid Cavalry','Khorchins'], 3, 'cav');
labelUnits(['Tseregs','Galahad Javelins','Claymores','Fortebraccios','Imperial Pike Guard','Symmachean Paladins','Men at Arms','Palace Guard','Lancastrian Billmen','Zealots','Wuwei Mansion Guard','Myrmillones','Symmachean Stalwarts','Spear Sergeants','Imperial Spear Guard','Crescent Monks','Berserkers','Halberdier Sergeants','Onna-Musha','Laconic Javelins','Halberd Elite','Azaps','Huskarls','Javelin Sergeants','Imperial Javelins','Tiger Fists','Banner Guards','Axe Raiders','Greyhair Garrison'], 4, 'infantry');
labelUnits(['Matchlock Ashigaru','Imperial Archers','Longbows','Swinefeathers','Kreigsrat Fusiliers','Imperial Arquebusiers'], 4, 'ranged');
labelUnits(['Khevtuul Cavalry','Yorkist Knights','Kreigsbruders','Camel Lancers','Prefecture Heavy Cav','Dagger-Axe Lancers','Sipahis','Yeomans','Companion Cavalry','Armiger Lancers'], 4, 'cav');
labelUnits(['Iron Reapers','Spartans Chosen','Queens Knights','Zweihanders','Sunward Phalanx','Retiarii','Silahdars','Shieldmaidens','Orochi Samurai','Hashashin','Varangian Guard','Modao Battalion','White Plume Guard'], 5, 'infantry');
labelUnits(['Royal Longbows','Tercio Arquebusiers','Hwarangs','Houndsmen'], 5, 'ranged');
labelUnits(['Kheshigs','Xuanjia Cavalry','Yanyuedao Cavalry','Winged Hussars','Rattan Rangers','Fire Lancers','Cataphract Lancers','Monastic Knights','Order of the Dragon','Empire Chariot','Chevaliers','Liaos Rangers','Tiger & Leopard Cav'], 5, 'cav');
labelUnits(['Zykalian Militia'], 3, 'exotic');
labelUnits(['Siphonarioi','Falconetti Gunners','Lionroar Cannons','Shenji Grenadiers'], 5, 'exotic');

const shared = new URLSearchParams(location.search).get('view');
const state = JSON.parse(localStorage.getItem('underdogs-builder') || '{}');
state.groups ??= 3; state.players ??= 5;
state.data ??= { players: ['Player One', 'Player Two'], units: ['Imperial Spearmen', 'Iron Reapers', 'Silahdars'], artillery: ['Cannon', 'Grapeshot Cannon'] };
state.data.artillery ??= [];
state.data.units = [...new Set([...state.data.units, ...suppliedUnits])];
state.data.artillery = [...new Set([...state.data.artillery, ...suppliedArtillery])];
state.plans ??= {};
state.stats ??= {};
state.battles ??= [];
state.fiefs ??= {
  fief1: { name: 'Anഭt', type: 'Village', status: 'owned', notes: 'Primary resource node.' },
  fief2: { name: 'Reginopolis', type: 'City', status: 'enemy', notes: 'Heavy fortification.' },
  fief3: { name: 'Turm', type: 'Fief', status: 'target', notes: 'Next target for acquisition.' }
};
state.selectedFiefId ??= 'fief1';

const save = () => { if (!shared) localStorage.setItem('underdogs-builder', JSON.stringify(state)); };
const $ = s => document.querySelector(s);

if (shared) {
  try { Object.assign(state, JSON.parse(decodeURIComponent(escape(atob(shared))))); } catch { /* Fallback */ }
}

function configureSearchInput(input, id, values, placeholder) { 
  input.placeholder = placeholder; 
  input.setAttribute('list', id); 
  const list = document.createElement('datalist'); 
  list.id = id; 
  list.innerHTML = values.map(value => `<option value="${escapeHtml(value)}"></option>`).join(''); 
  if (input.parentElement) {
    input.parentElement.append(list); 
  }
}

function escapeHtml(value) { 
  const d = document.createElement('div'); 
  d.textContent = value; 
  return d.innerHTML; 
}

function tagCounts(groupIndex) { 
  const counts = { infantry: 0, ranged: 0, cav: 0, exotic: 0 }; 
  for (let p = 0; p < state.players; p++) { 
    const plan = state.plans[`g${groupIndex}-p${p}`] || {}; 
    for (let u = 0; u < (plan.units ?? 3); u++) { 
      const tag = unitMeta[plan[`unit${u}`]]?.tag; 
      if (tag) counts[tag]++; 
    } 
  } 
  return counts; 
}

function groupSummary(groupIndex) { 
  const counts = tagCounts(groupIndex); 
  return ['infantry','ranged','cav','exotic'].map(tag => `<span class="tag-count ${tag}">${tag === 'cav' ? 'CAV' : tag} ${counts[tag]}</span>`).join(''); 
}

function applyTier(select) { 
  select.classList.remove('tier-3','tier-4','tier-5'); 
  const tier = unitMeta[select.value]?.tier; 
  if (tier) select.classList.add(`tier-${tier}`); 
}

function setupControls() {
  $('#groupCount').innerHTML = [1,2,3,4,5,6,7,8].map(n => `<option value="${n}">${n} groups</option>`).join('');
  $('#playersPerGroup').innerHTML = [1,2,3,4,5].map(n => `<option value="${n}">${n} players</option>`).join('');
  $('#groupCount').value = state.groups; 
  $('#playersPerGroup').value = state.players;
  $('#groupCount').onchange = e => { state.groups = +e.target.value; save(); renderBuilder(); };
  $('#playersPerGroup').onchange = e => { state.players = +e.target.value; save(); renderBuilder(); };
}

function renderBuilder() {
  state.data.artillery = [...new Set([...(state.data.artillery || []), ...suppliedArtillery])];
  $('#playerTotal').textContent = state.groups * state.players;
  const area = $('#groups'); 
  if (!area) return;
  area.innerHTML = '';
  
  const groupTemplate = $('#groupTemplate'); 
  const playerTemplate = $('#playerTemplate');
  if (!groupTemplate || !playerTemplate) return;

  for (let g = 0; g < state.groups; g++) {
    const group = groupTemplate.content.cloneNode(true); 
    const groupId = `g${g}`;
    
    const input = group.querySelector('.group-name'); 
    if (input) {
      input.value = state.plans[groupId]?.name || `Group ${g + 1}`;
      input.onchange = e => { (state.plans[groupId] ??= {}).name = e.target.value; save(); };
    }
    
    const numEl = group.querySelector('.group-number');
    if (numEl) numEl.textContent = `0${g + 1}`;
    
    const sizeEl = group.querySelector('.group-size');
    if (sizeEl) sizeEl.textContent = `${state.players} PLAYER${state.players > 1 ? 'S' : ''}`;
    
    const summaryEl = group.querySelector('.group-summary');
    if (summaryEl) summaryEl.innerHTML = groupSummary(g);
    
    const playerList = group.querySelector('.player-list');
    if (playerList) {
      for (let p = 0; p < state.players; p++) {
        const player = playerTemplate.content.cloneNode(true); 
        const id = `${groupId}-p${p}`; 
        const plan = state.plans[id] ??= {};
        
        const pIndex = player.querySelector('.player-index');
        if (pIndex) pIndex.textContent = `P${p + 1}`;
        
        const playerSelect = player.querySelector('.player-select'); 
        if (playerSelect) {
          playerSelect.value = plan.player || '';
          configureSearchInput(playerSelect, `${id}-players`, state.data.players, 'Search player…'); 
          playerSelect.onchange = e => { plan.player = e.target.value; save(); };
        }
        
        const slots = player.querySelector('.unit-slots'); 
        if (slots) {
          const unitCount = plan.units ?? 3; 
          if (unitCount === 4) slots.classList.add('four');
          
          for(let u = 0; u < unitCount; u++) { 
            const select = document.createElement('input'); 
            select.setAttribute('aria-label', `Unit ${u+1}`); 
            select.value = plan[`unit${u}`] || ''; 
            applyTier(select); 
            select.onchange = e => { plan[`unit${u}`] = e.target.value; save(); renderBuilder(); }; 
            slots.append(select); 
            configureSearchInput(select, `${id}-unit${u}`, state.data.units, `Search unit ${u+1}…`); 
          }
          
          const slotAction = document.createElement('button'); 
          slotAction.type = 'button'; 
          slotAction.className = unitCount === 4 ? 'remove-fourth' : 'add-fourth'; 
          slotAction.textContent = unitCount === 4 ? '−' : '+'; 
          slotAction.setAttribute('aria-label', unitCount === 4 ? 'Remove fourth unit' : 'Add fourth unit'); 
          slotAction.onclick = () => { 
            plan.units = unitCount === 4 ? 3 : 4; 
            if (plan.units === 3) delete plan.unit3; 
            save(); 
            renderBuilder(); 
          }; 
          slots.append(slotAction);
        }
        
        const artillery = player.querySelector('.artillery-select'); 
        if (artillery) {
          artillery.value = plan.artillery || '';
          configureSearchInput(artillery, `${id}-artillery`, state.data.artillery, 'Search…'); 
          artillery.onchange = e => { plan.artillery = e.target.value; save(); };
        }
        
        playerList.append(player);
      }
    }
    area.append(group);
  }
  save();
}

function renderCampaignMap() {
  const mapContainer = $('#campaignMap');
  if (!mapContainer) return;
  mapContainer.innerHTML = '';

  Object.entries(state.fiefs || {}).forEach(([id, fief]) => {
    const node = document.createElement('div');
    node.className = `fief-node ${fief.status || 'owned'}`;
    if (state.selectedFiefId === id) {
      node.style.outline = '2px solid var(--accent)';
    }
    node.innerHTML = `
      <span class="fief-type">${escapeHtml(fief.type || 'Fief')}</span>
      <div class="fief-name">${escapeHtml(fief.name || 'Unnamed')}</div>
    `;
    node.onclick = () => {
      state.selectedFiefId = id;
      save();
      renderCampaignMap();
      renderFiefDetails();
    };
    mapContainer.append(node);
  });
}

function renderFiefDetails() {
  const detailsContainer = $('#fiefDetailsCard');
  if (!detailsContainer) return;
  const fief = state.fiefs?.[state.selectedFiefId];
  if (!fief) {
    detailsContainer.innerHTML = '<p>Select a fief on the map to view details.</p>';
    return;
  }

  detailsContainer.innerHTML = `
    <h3>Fief Details</h3>
    <label>
      Fief Name
      <input type="text" id="fiefNameInput" value="${escapeHtml(fief.name || '')}" />
    </label>
    <label>
      Type
      <input type="text" id="fiefTypeInput" value="${escapeHtml(fief.type || '')}" />
    </label>
    <label>
      Status
      <select id="fiefStatusSelect">
        <option value="owned" ${fief.status === 'owned' ? 'selected' : ''}>Owned</option>
        <option value="enemy" ${fief.status === 'enemy' ? 'selected' : ''}>Enemy</option>
        <option value="target" ${fief.status === 'target' ? 'selected' : ''}>Target</option>
      </select>
    </label>
    <label>
      Notes / Plan
      <textarea id="fiefNotesInput">${escapeHtml(fief.notes || '')}</textarea>
    </label>
  `;

  $('#fiefNameInput').oninput = e => {
    fief.name = e.target.value;
    save();
    renderCampaignMap();
  };
  $('#fiefTypeInput').oninput = e => {
    fief.type = e.target.value;
    save();
    renderCampaignMap();
  };
  $('#fiefStatusSelect').onchange = e => {
    fief.status = e.target.value;
    save();
    renderCampaignMap();
  };
  $('#fiefNotesInput').oninput = e => {
    fief.notes = e.target.value;
    save();
  };
}

function renderLists() {
  const artillery = [...new Set([...suppliedArtillery, ...(state.data.artillery || [])])];
  state.data.artillery = artillery;
  ['players','units','artillery'].forEach(type => {
    const list = $(`#${type}List`);
    if (list) {
      const entries = type === 'artillery' ? artillery : state.data[type];
      list.innerHTML = entries.map((item, index) => `<li>${escapeHtml(item)}<button class="remove" data-type="${type}" data-index="${index}" aria-label="Remove ${escapeHtml(item)}">×</button></li>`).join('') || '<li>No entries yet.</li>';
    }
  });
}

function renderBattleLog() {
  const count = $('#battleCount');
  if (count) count.textContent = `${state.battles.length} ${state.battles.length === 1 ? 'record' : 'records'}`;
  const wins = state.battles.filter(battle => battle.outcome === 'victory').length;
  const losses = state.battles.filter(battle => battle.outcome === 'defeat').length;
  if ($('#battleWins')) $('#battleWins').textContent = wins;
  if ($('#battleLosses')) $('#battleLosses').textContent = losses;
  const history = $('#battleHistory');
  if (!history) return;
  history.innerHTML = state.battles.length ? [...state.battles].reverse().map((battle, reverseIndex) => {
    const index = state.battles.length - 1 - reverseIndex;
    const date = new Date(`${battle.date}T12:00:00`).toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' });
    const roleLabel = battle.role === 'defending' ? 'Defense' : 'Attack';
    const statusLabel = { secured: 'Secured', held: 'Held at position', base: 'Fell back to base' }[battle.endStatus] || battle.endStatus;
    return `<article class="battle-entry"><div class="battle-entry-main"><div class="battle-entry-date"><strong>${escapeHtml(date)}</strong><small>${escapeHtml(battle.time || '')}</small></div><span class="battle-badge role-${battle.role}">${roleLabel}</span><span class="fief-badge">◈ ${escapeHtml(battle.fiefType)}</span><div class="battle-opponent"><strong>${escapeHtml(battle.opponent)}</strong><small>${escapeHtml(statusLabel)}</small></div><span class="battle-badge outcome-${battle.outcome}">${battle.outcome === 'victory' ? 'Victory' : 'Defeat'}</span><div class="battle-notes">${escapeHtml(battle.notes || 'No notes added.')}</div><div class="battle-actions"><button class="icon-button" type="button" data-battle-action="edit" data-battle-index="${index}" aria-label="Edit battle">✎</button><button class="icon-button danger" type="button" data-battle-action="delete" data-battle-index="${index}" aria-label="Delete battle">×</button></div></div></article>`;
  }).join('') : '<div class="battle-empty"><span>✦</span><strong>No battle records yet</strong><p>Use the quick-entry form to log your first Territory War engagement.</p></div>';
}

let leaderboardSort = { key: 'rate', direction: 'desc' };
let leaderboardSearch = '';

function renderAttendanceLeaderboard() {
  const warCount = state.data.players.reduce((max, name) => {
    const stat = state.stats[name] || { attended: 0, missed: 0 };
    return Math.max(max, stat.attended + stat.missed);
  }, 0);
  if ($('#leaderboardWarCount')) $('#leaderboardWarCount').textContent = `${warCount} ${warCount === 1 ? 'war' : 'wars'} tracked`;
  const rows = state.data.players.map(name => {
    const stat = state.stats[name] || { attended: 0, missed: 0 };
    const total = stat.attended + stat.missed;
    return { name, total, attended: stat.attended, missed: stat.missed, rate: total ? Math.round((stat.attended / total) * 100) : 0 };
  });
  const filteredRows = rows.filter(row => row.name.toLowerCase().includes(leaderboardSearch));
  filteredRows.sort((a, b) => {
    const comparison = leaderboardSort.key === 'name' ? a.name.localeCompare(b.name) : a[leaderboardSort.key] - b[leaderboardSort.key];
    return leaderboardSort.direction === 'asc' ? comparison : -comparison;
  });
  const body = $('#leaderboardBody');
  if (body) body.innerHTML = filteredRows.length ? filteredRows.map(row => `<tr><td class="leaderboard-player"><span class="player-avatar">${escapeHtml(row.name.slice(0, 1).toUpperCase())}</span><strong>${escapeHtml(row.name)}</strong></td><td>${row.total}</td><td><span class="score-pill attended">${row.attended}</span></td><td><span class="score-pill missed">${row.missed}</span></td><td><div class="rate-cell"><strong>${row.rate}%</strong><span class="rate-track"><i style="width:${row.rate}%"></i></span></div></td></tr>`).join('') : `<tr><td colspan="5" class="leaderboard-empty">${leaderboardSearch ? 'No players match your search.' : 'Add players in the Roster Vault to start tracking attendance.'}</td></tr>`;
}

function renderAttendanceEditor() {
  const editor = $('#attendanceEditor');
  if (editor) {
    editor.innerHTML = state.data.players.map(name => { 
      const stat = state.stats[name] || { attended: 0, missed: 0 }; 
      return `<tr><td>${escapeHtml(name)}</td><td><input type="number" min="0" value="${stat.attended}" data-player="${escapeHtml(name)}" data-stat="attended" aria-label="${escapeHtml(name)} attended" /></td><td><input type="number" min="0" value="${stat.missed}" data-player="${escapeHtml(name)}" data-stat="missed" aria-label="${escapeHtml(name)} did not attend" /></td></tr>`; 
    }).join('') || '<tr><td colspan="3">Add players in the Roster Vault first.</td></tr>';
  }
}

document.querySelectorAll('.tabs .tab').forEach(tab => tab.onclick = () => { 
  document.querySelectorAll('.tab,.panel').forEach(x => x.classList.remove('active')); 
  tab.classList.add('active'); 
  const targetPanel = $(`#${tab.dataset.tab}`);
  if (targetPanel) targetPanel.classList.add('active'); 
  if (tab.dataset.tab === 'stats') { renderBattleLog(); renderAttendanceLeaderboard(); }
  if (tab.dataset.tab === 'vault') renderLists();
  if (tab.dataset.tab === 'warplan') {
    renderCampaignMap();
    renderFiefDetails();
  }
});

document.querySelectorAll('.stats-subtab').forEach(tab => tab.onclick = () => {
  document.querySelectorAll('.stats-subtab,.stats-subview').forEach(element => element.classList.remove('active'));
  document.querySelectorAll('.stats-subview').forEach(element => element.classList.add('hidden'));
  tab.classList.add('active');
  const view = $(`#${tab.dataset.statsView}`);
  if (view) { view.classList.remove('hidden'); view.classList.add('active'); }
  if (tab.dataset.statsView === 'attendanceLeaderboardView') renderAttendanceLeaderboard();
});

const leaderboardSearchInput = $('#leaderboardSearch');
if (leaderboardSearchInput) leaderboardSearchInput.oninput = event => {
  leaderboardSearch = event.target.value.trim().toLowerCase();
  renderAttendanceLeaderboard();
};

document.querySelectorAll('.sort-button').forEach(button => button.onclick = () => {
  const key = button.dataset.sortKey;
  leaderboardSort = leaderboardSort.key === key ? { key, direction: leaderboardSort.direction === 'asc' ? 'desc' : 'asc' } : { key, direction: key === 'name' ? 'asc' : 'desc' };
  renderAttendanceLeaderboard();
});

document.querySelectorAll('.admin-tab').forEach(tab => tab.onclick = () => { 
  document.querySelectorAll('.admin-tab,.admin-section').forEach(x => x.classList.remove('active')); 
  tab.classList.add('active'); 
  const targetSec = $(`#${tab.dataset.adminTab}`);
  if (targetSec) targetSec.classList.add('active'); 
  if (tab.dataset.adminTab === 'attendance') renderAttendanceEditor(); 
});

const battleDatePreference = localStorage.getItem('underdogs-battle-date') || new Date().toISOString().slice(0, 10);
if ($('#battleDate')) $('#battleDate').value = battleDatePreference;
if ($('#rememberBattleDate')) $('#rememberBattleDate').checked = localStorage.getItem('underdogs-remember-battle-date') === 'true';

document.querySelectorAll('.segment').forEach(button => button.onclick = () => {
  const field = $(`#${button.dataset.field}`);
  document.querySelectorAll(`.segment[data-field="${button.dataset.field}"]`).forEach(segment => segment.classList.remove('active'));
  button.classList.add('active');
  if (field) field.value = button.dataset.value;
});

function resetBattleForm() {
  const form = $('#battleForm');
  if (form) form.reset();
  $('#battleRole').value = 'attacking';
  $('#battleOutcome').value = 'victory';
  document.querySelectorAll('.segment').forEach(segment => segment.classList.toggle('active', (segment.dataset.field === 'battleRole' && segment.dataset.value === 'attacking') || (segment.dataset.field === 'battleOutcome' && segment.dataset.value === 'victory')));
  $('#battleDate').value = $('#rememberBattleDate').checked ? (localStorage.getItem('underdogs-battle-date') || new Date().toISOString().slice(0, 10)) : new Date().toISOString().slice(0, 10);
  $('#cancelBattleEdit')?.classList.add('hidden');
  $('#battleForm')?.removeAttribute('data-edit-index');
}

const battleForm = $('#battleForm');
if (battleForm) battleForm.onsubmit = event => {
  event.preventDefault();
  const battle = { date: $('#battleDate').value, role: $('#battleRole').value, opponent: $('#battleOpponent').value.trim(), fiefType: $('#battleFiefType').value, outcome: $('#battleOutcome').value, endStatus: $('#battleEndStatus').value, notes: $('#battleNotes').value.trim(), time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
  const editIndex = battleForm.dataset.editIndex;
  if (editIndex === undefined) state.battles.push(battle); else state.battles[+editIndex] = battle;
  if ($('#rememberBattleDate').checked) localStorage.setItem('underdogs-battle-date', battle.date); else localStorage.removeItem('underdogs-battle-date');
  localStorage.setItem('underdogs-remember-battle-date', $('#rememberBattleDate').checked);
  save();
  resetBattleForm();
  renderBattleLog();
};

document.addEventListener('click', event => {
  const action = event.target.closest('[data-battle-action]');
  if (!action) return;
  const index = +action.dataset.battleIndex;
  if (action.dataset.battleAction === 'delete') {
    if (!confirm('Delete this battle record?')) return;
    state.battles.splice(index, 1);
    save();
    renderBattleLog();
    return;
  }
  const battle = state.battles[index];
  if (!battle) return;
  $('#battleDate').value = battle.date;
  $('#battleOpponent').value = battle.opponent;
  $('#battleFiefType').value = battle.fiefType;
  $('#battleEndStatus').value = battle.endStatus;
  $('#battleNotes').value = battle.notes || '';
  $('#battleRole').value = battle.role;
  $('#battleOutcome').value = battle.outcome;
  document.querySelectorAll('.segment').forEach(segment => segment.classList.toggle('active', (segment.dataset.field === 'battleRole' && segment.dataset.value === battle.role) || (segment.dataset.field === 'battleOutcome' && segment.dataset.value === battle.outcome)));
  battleForm.dataset.editIndex = index;
  $('#cancelBattleEdit')?.classList.remove('hidden');
  $('#battleForm')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

$('#cancelBattleEdit')?.addEventListener('click', resetBattleForm);

const loginForm = $('#loginForm');
if (loginForm) {
  loginForm.onsubmit = e => { 
    e.preventDefault(); 
    if ($('#username').value === 'Dog' && $('#password').value === 'Dog') { 
      sessionStorage.setItem('underdogs-vault','open'); 
      $('#loginScreen').classList.add('hidden'); 
      $('#vaultContent').classList.remove('hidden'); 
      renderLists(); 
      renderAttendanceEditor(); 
    } else {
      const err = $('#loginError');
      if (err) err.textContent = 'That username or password is not correct.'; 
    }
  };
}

const logoutBtn = $('#logOut');
if (logoutBtn) {
  logoutBtn.onclick = () => { 
    sessionStorage.removeItem('underdogs-vault'); 
    $('#vaultContent').classList.add('hidden'); 
    $('#loginScreen').classList.remove('hidden'); 
    if (loginForm) loginForm.reset(); 
  };
}

document.querySelectorAll('.data-card form').forEach(form => form.onsubmit = e => { 
  e.preventDefault(); 
  const input = form.querySelector('input');
  if (!input) return;
  const value = input.value.trim(); 
  const type = form.dataset.list; 
  if(value && !state.data[type].includes(value)) { 
    state.data[type].push(value); 
    form.reset(); 
    save(); 
    renderLists();
    renderBuilder();
    renderBattleLog();
    renderAttendanceLeaderboard();
  } 
});

document.addEventListener('click', e => { 
  if (!e.target.matches('.remove')) return; 
  state.data[e.target.dataset.type].splice(+e.target.dataset.index, 1); 
  save(); 
  renderLists();
  renderBuilder();
  renderBattleLog();
  renderAttendanceLeaderboard();
});

const saveAttBtn = $('#saveAttendance');
if (saveAttBtn) {
  saveAttBtn.onclick = () => { 
    document.querySelectorAll('#attendanceEditor input').forEach(input => { 
      const stat = state.stats[input.dataset.player] ??= { attended: 0, missed: 0 }; 
      stat[input.dataset.stat] = Math.max(0, Number(input.value) || 0); 
    }); 
    save();
    renderBattleLog();
    renderAttendanceLeaderboard();
    renderAttendanceEditor();
    saveAttBtn.textContent = 'Attendance saved'; 
    setTimeout(() => saveAttBtn.innerHTML = 'Save attendance changes <span>→</span>', 1600); 
  };
}

const resetStatsBtn = $('#resetStats');
if (resetStatsBtn) {
  resetStatsBtn.onclick = () => { 
    if (!confirm('Reset attendance for every house member to zero? This cannot be undone.')) return; 
    state.stats = {}; 
    save(); 
    renderBattleLog(); 
    renderAttendanceEditor(); 
  };
}

const clearPlansBtn = $('#clearPlans');
if (clearPlansBtn) {
  clearPlansBtn.onclick = () => { 
    if(confirm('Clear every player, unit, and artillery selection?')) { 
      state.plans = {}; 
      save(); 
      renderBuilder(); 
    } 
  };
}

function currentRoster() { 
  return [...new Set(Object.entries(state.plans).filter(([key, value]) => /^g\d+-p\d+$/.test(key) && value.player).map(([, value]) => value.player))]; 
}

function discordSummary() { 
  const roster = currentRoster(); 
  const groups = []; 
  for(let g = 0; g < state.groups; g++) { 
    const name = state.plans[`g${g}`]?.name || `Group ${g + 1}`; 
    const members = []; 
    for(let p = 0; p < state.players; p++) { 
      const plan = state.plans[`g${g}-p${p}`]; 
      if(plan?.player) members.push(plan.player); 
    } 
    if(members.length) groups.push(`**${name}** — ${members.join(', ')}`); 
  } 
  return `**THE UNDERDOGS — Territory War Roster**\n${groups.join('\n')}\n\nConfirmed: ${roster.length}/${state.data.players.length} house members`; 
}

async function copyText(text, success) { 
  try { 
    await navigator.clipboard.writeText(text); 
    success(); 
  } catch { 
    prompt('Copy this:', text); 
  } 
}

const confirmWarBtn = $('#confirmWar');
if (confirmWarBtn) {
  confirmWarBtn.onclick = () => {
    const roster = currentRoster();
    state.data.players.forEach(name => { 
      const stat = state.stats[name] ??= { attended: 0, missed: 0 }; 
      if (roster.includes(name)) stat.attended++; 
      else stat.missed++; 
    });
    save();
    renderBattleLog();
    renderAttendanceLeaderboard();
    const details = $('#confirmDetails');
    if (details) details.textContent = `${roster.length} attended · ${Math.max(0, state.data.players.length - roster.length)} did not attend`;
    const res = $('#confirmResult');
    if (res) {
      res.classList.remove('hidden'); 
      res.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };
}

const discordExpBtn = $('#discordExport');
if (discordExpBtn) {
  discordExpBtn.onclick = () => copyText(discordSummary(), () => { 
    discordExpBtn.textContent = 'Copied to clipboard'; 
    setTimeout(() => discordExpBtn.textContent = 'Copy for Discord', 1800); 
  });
}

const shareLinkBtn = $('#shareLink');
if (shareLinkBtn) {
  shareLinkBtn.onclick = () => { 
    const view = { groups: state.groups, players: state.players, units: state.units, data: state.data, plans: state.plans, stats: state.stats, fiefs: state.fiefs }; 
    const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(view)))); 
    const url = `${location.href.split('?')[0]}?view=${encoded}`; 
    copyText(url, () => { 
      shareLinkBtn.textContent = 'Link copied'; 
      setTimeout(() => shareLinkBtn.textContent = 'Copy read-only link', 1800); 
    }); 
  };
}

setupControls();
renderBuilder();
renderLists();
renderBattleLog();
renderAttendanceLeaderboard();
renderCampaignMap();
renderFiefDetails();

if (sessionStorage.getItem('underdogs-vault') === 'open') { 
  const loginScr = $('#loginScreen');
  const vaultCont = $('#vaultContent');
  if (loginScr) loginScr.classList.add('hidden'); 
  if (vaultCont) vaultCont.classList.remove('hidden'); 
  renderLists(); 
  renderAttendanceEditor(); 
}

renderBattleLog();

if (shared) { 
  document.querySelectorAll('input,select,button').forEach(el => { 
    if (!el.closest('.tabs')) el.disabled = true; 
  }); 
  if (clearPlansBtn) clearPlansBtn.disabled = true; 
  const confirmBar = $('#confirmWar')?.closest('.confirm-bar');
  if (confirmBar) confirmBar.classList.add('hidden'); 
  const confirmRes = $('#confirmResult');
  if (confirmRes) confirmRes.classList.add('hidden'); 
}
